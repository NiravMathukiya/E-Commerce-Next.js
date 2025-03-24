"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Login } from "@/slices/Auth/authSlice";
import { Chrome } from "lucide-react";
import { setCookie } from "cookies-next";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data)
            if (res.ok) {
                setCookie("token", data.token);
                dispatch(Login({ user: data.user, token: data.token }));

                toast.success("Login successful!");
                router.push("/shop", { shallow: true }); // Prevent full reload                
            } else {
                toast.error(data?.error || "Login failed. Try again.");
            }
        } catch (error) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <p className="ml-2 font-normal">Sign In To FASCO</p>
            <form onSubmit={handleSubmit}>
                <div className="mt-6">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-b-2 border-black focus:outline-none placeholder:text-xs md:placeholder:text-base mt-2 md:p-2 p-2 w-full"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-b-2 border-black focus:outline-none placeholder:text-xs md:placeholder:text-base mt-2 md:p-2 p-2 w-full"
                    />
                </div>

                <div className="flex justify-end mt-2 text-gray-400">
                    <Link href="/auth/forget-password">Forget Password?</Link>
                </div>

                <div className="mt-6 flex justify-center items-center">
                    <button
                        type="submit"
                        disabled={loading}
                        aria-busy={loading}
                        className="bg-black/80 hover:bg-black/90 w-full text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>

            <hr className="border-gray-300 mt-6" />

            <div className="mt-4 flex justify-center">
                <button
                    className="flex shadow-[-10px_5px_10px_0_rgba(0,0,0,0.2),10px_-5px_10px_0_rgba(0,0,0,0.2)] bg-white/80 hover:bg-white/60 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => signIn("google")}
                >
                    <Chrome className="mr-2" />
                    Sign in with Google
                </button>
            </div>

            <div className="flex justify-center hover:underline ease-in-out duration-700 transition-all mt-4">
                <Link href="/signup">Register Now</Link>
            </div>
        </div>
    );
};

export default LoginForm;