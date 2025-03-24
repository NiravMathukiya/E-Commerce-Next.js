"use client"

import React , { useRef, useEffect } from "react";

const OtpForm = () => {
    const inputsRef = useRef([]);

    useEffect(() => {
        if (inputsRef.current[0]) inputsRef.current[0].focus();
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) {
            e.target.value = ""; // Allow only numbers
            return;
        }

        if (value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otp = inputsRef.current.map((input) => input.value).join("");
        console.log("Entered OTP:", otp);
    };

    return (
        <div>
            <p className="ml-2 mt-16 font-normal text-center">Enter OTP</p>
            <form onSubmit={handleSubmit}>
                <div className="mt-10 flex justify-center gap-2">
                    {[...Array(4)].map((_, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputsRef.current[index] = el)}
                            type="text"
                            maxLength="1"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="border-b-2 border-black focus:outline-none text-center text-lg w-12 h-12"
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-black/80 w-full text-white py-2 px-4 rounded hover:bg-black/75"
                    >
                        Verify OTP
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OtpForm;
