import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // Find user in database
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ error: "Invalid credentials!" }, { status: 401 });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" } // Token expires in 7 days
        );

        // Remove password before sending response
        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json({
            message: "Login successful!",
            user: userWithoutPassword,
            token,
        });
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
    }
}
