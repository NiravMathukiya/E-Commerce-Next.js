"use client";
// 1 = https://media-hosting.imagekit.io//66ba78704f7c4adb/image%202.png?Expires=1836969012&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y7anwVd5xsnW~xxt2igh-0CCu29Zb-n8bYG1Ab270l22m8rwj4kfO3Ese036E8aN0ZpgAkYVYGGW~qngZpT9vdC17sCu-z2BrZcrH9owG9yRi2Zxl~si2k9eT9Ekr8cypFuZTAoFaH9YT0xwugeuwJpe7g6HE8BAXdhVfLYASZ--naTp-ZbJtQZfKEBD-AkRt6jMlvjiIupAVcE94F~MwEP6WNymuBJMie1Udi~pXyEXGWQZ~iWmbPleeV~DtWdGxsOuPXvk~WkbmW0zvMZ4wp0RCp11cSfWQ9JK4Sq-kKEhVZRWZo2ZFcVIJgkYF~8lyyEQ0z1AAbAMppi-aVF-Jw__
// 2 = http://media-hosting.imagekit.io//dab6d7d21c8b4880/image%203.png?Expires=1836969028&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SqcDgwRBRYgUvsdFUW29sQp54IMxevCE~ijPrzKzEUF9PHqA-TKIJSoQSH1TRgSjQcJmN7-cJc0HotoqOqwYpEjuXehra1l~VwTwmqjfWdO94MzARc6usHpxHmPTShdzsWlAxk0WAa~MlFwRaarqqtoCz5aOCVREw4HpZRhkysopNPlmCl-Cvs7YwdmbG-v7MEokohZUg8nYLwm4YvymUvknAUjwxps3U3aT77WkzORJ2Z~y5XYEd-9PZzyZlZb-UdTV-U3khu69ZOD3CNyw5JqAniTpfv5~0GdxUcIrApvlPr79uliXL5Kt9Z68o~5K-2O7ACi0L6OtARx6b9CHug__




import React, { useState } from "react";
import Input from "@/components/Input";
import Image from "next/image";

const NewSeletter = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="mt-10 mb-10 flex max-w-6xl mx-auto">
            {/* Left Image */}
            <div className="md:w-1/4 w-2/5">
                <Image
                    src="https://media-hosting.imagekit.io//66ba78704f7c4adb/image%202.png?Expires=1836969012&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y7anwVd5xsnW~xxt2igh-0CCu29Zb-n8bYG1Ab270l22m8rwj4kfO3Ese036E8aN0ZpgAkYVYGGW~qngZpT9vdC17sCu-z2BrZcrH9owG9yRi2Zxl~si2k9eT9Ekr8cypFuZTAoFaH9YT0xwugeuwJpe7g6HE8BAXdhVfLYASZ--naTp-ZbJtQZfKEBD-AkRt6jMlvjiIupAVcE94F~MwEP6WNymuBJMie1Udi~pXyEXGWQZ~iWmbPleeV~DtWdGxsOuPXvk~WkbmW0zvMZ4wp0RCp11cSfWQ9JK4Sq-kKEhVZRWZo2ZFcVIJgkYF~8lyyEQ0z1AAbAMppi-aVF-Jw__"
                    alt="Newsletter Image"
                    width={200} // Provide actual width and height
                    height={200}
                    className="w-full h-auto"
                />
            </div>

            {/* Newsletter Content */}
            <div className="md:w-2/4 w-3/5 flex justify-center items-center flex-col rounded-md">
                <h1 className="md:mb-3 font-bold text-sm md:text-4xl">
                    Subscribe To Our Newsletter
                </h1>
                <p className="text-[8px] md:mb-4 w-2/3 text-center md:text-[12px]">
                    Sign up for our newsletter to get the latest news and updates...
                </p>

                {/* Form */}
                <form
                    className="flex flex-col justify-center items-center w-[70%] md:w-[60%]"
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(email);
                        setEmail("");
                    }}
                >
                    <Input
                        type="email"
                        value={email}
                        required
                        onChange={setEmail} // ✅ Fixed
                        name="email" // ✅ Corrected name attribute
                        className="w-full px-2 text-xs py-1 border-b border-black outline-black"

                    />
                    <br />
                    <button
                        type="submit"
                        className="bg-black/80 md:py-2 py-1 md:px-6 px-3 text-white text-sm shadow-2xl rounded-md hover:bg-black transition-all duration-300"
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>

            {/* Right Image */}
            <div className="md:w-1/4 hidden md:block">
                <Image
                    src="http://media-hosting.imagekit.io//dab6d7d21c8b4880/image%203.png?Expires=1836969028&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SqcDgwRBRYgUvsdFUW29sQp54IMxevCE~ijPrzKzEUF9PHqA-TKIJSoQSH1TRgSjQcJmN7-cJc0HotoqOqwYpEjuXehra1l~VwTwmqjfWdO94MzARc6usHpxHmPTShdzsWlAxk0WAa~MlFwRaarqqtoCz5aOCVREw4HpZRhkysopNPlmCl-Cvs7YwdmbG-v7MEokohZUg8nYLwm4YvymUvknAUjwxps3U3aT77WkzORJ2Z~y5XYEd-9PZzyZlZb-UdTV-U3khu69ZOD3CNyw5JqAniTpfv5~0GdxUcIrApvlPr79uliXL5Kt9Z68o~5K-2O7ACi0L6OtARx6b9CHug__"
                    alt="Newsletter Image 2"
                    
                    onChange={setEmail}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default NewSeletter;
