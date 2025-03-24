"use client";

import { Chrome } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";


const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/auth/signup", {
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
            });

            toast.success("Signup Successful");
            console.log("User Created:", response.data);

            // Reset Form
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setPhoneNumber("");
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
            <p className="text-lg font-semibold text-center">Sign Up to FASCO</p>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="border-b-2 border-black focus:outline-none mt-2 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="border-b-2 border-black focus:outline-none mt-2 p-2 w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-b-2 border-black focus:outline-none mt-2 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border-b-2 border-black focus:outline-none mt-2 p-2 w-full"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phonenumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="border-b-2 border-black focus:outline-none mt-2 p-2 w-full"
                    />
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-900 w-full text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </div>
            </form>

            <hr className="border-gray-300 mt-6" />

            <div className="mt-4 flex justify-center">
                <button
                    className="flex items-center shadow-lg bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => signIn("google")}
                >
                    <Chrome className="mr-2" />
                    Sign in with Google
                </button>
            </div>

            <div className="flex justify-center hover:underline transition-all mt-4">
                <Link href={"/login"}>Already have an account? Login Now</Link>
            </div>
        </div>
    );
};

export default SignupForm;
