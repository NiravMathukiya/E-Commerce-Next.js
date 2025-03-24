import "@/app/globals.css";
import Image from "next/image";
export default function AuthLayout({ children }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-[-10px_5px_50px_0_rgba(0,0,0,0.2),10px_-5px_50px_0_rgba(0,0,0,0.2)] rounded-3xl">
                <div className="max-w-6xl max-h-6xl border mx-auto border-gray-300 p-2 rounded-3xl flex">
                    <div className="min-h-1/2 w-1/2 rounded-l-lg">
                        <Image width={500} height={500} priority src="https://media-hosting.imagekit.io//9e23a642dc094671/Login.png?Expires=1837229312&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ifyDiWtIXhxpJeZl0cFEP1fOivchvaYrpvQ9vuxuPqU6-EJs3ypvXiPfHfSMEJ3ZRc4f7yeswv8knm5hOXeU1-rDFcrBOCqdZKGFWZMypXcYRDFtHDWosTZCAOt7U0GhXikoUUGkDcfZu9IvEWvCMJwjxxEUZKjU31r3C2d3XwdzUaGXE7aLI44OaOiiBjr~98luRdOMqMI2RiVJDdMENXkvk~8vnubRJZt-K5HaKhWCL6nzzESkkYf4TKqFRAoIummDUSdVQW8qP65WNx5NpMvvvDJL3bbCydGzqO8kznug3YmtNR0qrXfgPrM7C~dI8kZQddTT6LwqWxdx3RKr4w__" alt="" className="h-full rounded-l-xl w-full object-cover" />
                    </div>
                    <div className="px-14 py-14 font-semibold w-1/2 rounded-r-2xl">
                        <div className="mb-6">
                            <h1 className="capitalize text-5xl text-gray-500">FASCO</h1>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
