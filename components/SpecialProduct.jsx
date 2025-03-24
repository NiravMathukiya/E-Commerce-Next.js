"use client";
import React from "react";

const SpecialProduct = () => {
    const product = {
        type: "Women Collection",
        name: "Special Product",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque soluta assumenda tenetur adipisci nisi deserunt aperiam, minima deleniti ex nihil ipsam molestiae non iure ipsa dolor vitae eos. Eligendi?",
        size: ["M", "L", "XL", "XXL"],
        price: 100.0,
        image:
            "https://media-hosting.imagekit.io//62023e7b58454469/image%20(6).png?Expires=1836900765&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RHfniPcLM9dBIdlPMS5yIV7Fsh2PIugJjlSpuWCZQ4Sszdb5d5WPsEoW~Tfm08FEOVeMc4lzdlvY-mPcMNKC1nPB-PeWTRipRyJhzRoYIlaZ28rm8c7P1gQqAYoD38iQJ2Xy~O5h2hSieRxPNziEDAAt-Ix6cFGC9u30kyPMAbgv1s6LkS0QVVk3WR4f3zLe2Ud6wj~ADuUtR8GLcYYpRJZo6X7zaSkk89HqQk0vxS87wU0LgFIv0VkejotdPIiHCIokoYCFuZriuTU23C0GrWMkPMHYAAqlMl1FrgwU62rn6leKgaoQxVO3nbGTxVTNmtyx9uhff4qWapjoNTV3DA__",
    };

    return (
        <div>
            <div className="m-1 md:py-0 bg-[#e0e0e0] py-1 max-w-6xl mx-auto  min-h-64 shadow-md shadow-black rounded-lg mb-10">
                <div className="flex flex-col md:flex-row  gap-6 bg-[#E0E0E0]  items-center  ">
                    {/* Left Side - Image with Clip Path */}

                    <div className=" md:bg-white   md:w-3/5 px-2  h-[400px] rounded-lg ">
                        <img
                            src={product.image}
                            alt="Special Product"
                            className="  h-full w-full object-cover  md:border-none border bg-[#e0e0e0] object-center bg-origin-center  z-10 rounded-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="md:w-2/5 flex m-2 flex-col gap-4 relative rounded-xl z-50">
                        <p className="text-sm text-gray-500 uppercase">{product.type}</p>
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className="text-gray-600 underline">Description</p>
                        <p className="text-gray-600">{product.description}</p>

                        <div>
                            <span className="font-semibold">Size: </span>
                            {product.size.map((size, index) => (
                                <span key={index} className="ml-1 text-sm bg-gray-200 px-2 py-1 rounded-md">
                                    {size}
                                </span>
                            ))}
                        </div>

                        <div className="text-lg font-semibold">${product.price}</div>

                        <button className="bg-black/80 w-30 py-2 px-6 text-white text-sm rounded-md shadow-lg hover:bg-black transition-all duration-300">
                            Buy Now
                        </button>

                        <div
                            className="md:absolute cutted hidden md:block  -top-5.5 -left-40 w-32 h-100 bg-[#E0E0E0] z-10  border-black"
                        ></div>
                        <div
                            className="md:absolute  hidden md:block  -top-5.5 -left-24 -skew-x-18 w-1 h-100 bg-[#000] z-10  border-black"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
