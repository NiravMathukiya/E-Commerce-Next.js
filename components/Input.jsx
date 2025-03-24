"use client";

import React from "react";

const Input = ({ type = "text", label, name, value, onChange, className, required}) => {
    return (
        <div className="w-full">
            {label && <label className="block text-sm font-medium mb-1 border-b border-black border ">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={name}
                required={required}
                className={`w-full placeholder:text-xs md:placeholder:text-base p mt-2 md:p-2 p-2 focus:outline-none border-b border-black/30   ${className}`}
                data-temp-mail-org="0"
                />

        </div>
    );
};

export default Input;
