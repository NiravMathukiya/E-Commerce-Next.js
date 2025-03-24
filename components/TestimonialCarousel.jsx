"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1)

    const testimonials = [
        {
            id: 1,
            name: "Sarah L.",
            role: "Customer",
            image: "https://media-hosting.imagekit.io//19a946b775d443c1/image%20(12).png?Expires=1836965093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M6IXwDQm9qvc6yJTCU~0af~py6uNDrcLuFQexjDjVDg5uERCz0qPYjE3ckV55UmILGiCGMSwCaz3rY5-jvpBxXANMzwUKfLXxHyuUAQYWlEAfoN21nGM~NuhfbAlEVXyC0DY3uejSPe2or4UB9qlWFqMC9F~ze6jPrOUSzaeGGsXiORg6SAcZB8No2wOq9ldsxN4bhkoKd7LVHhW1PEfsBNMoX-gboIwA2sr6xd93PnjmEqxfLIGeRXXSVTYMua06taymotjQC8iciFQ9bwoqzhFGSIPxFArvcdeIg~fjZHXZQD64yBaCWIxWxCHu0AlkJIp980orc-Xn9IhRVTnOQ__",
            quote: 'I was looking for "thank you for making it hassle-free and most of all hassle free! All we need."',
            rating: 5,
        },
        {
            id: 2,
            name: "James K.",
            role: "Traveler",
            image: "https://media-hosting.imagekit.io//19a946b775d443c1/image%20(12).png?Expires=1836965093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M6IXwDQm9qvc6yJTCU~0af~py6uNDrcLuFQexjDjVDg5uERCz0qPYjE3ckV55UmILGiCGMSwCaz3rY5-jvpBxXANMzwUKfLXxHyuUAQYWlEAfoN21nGM~NuhfbAlEVXyC0DY3uejSPe2or4UB9qlWFqMC9F~ze6jPrOUSzaeGGsXiORg6SAcZB8No2wOq9ldsxN4bhkoKd7LVHhW1PEfsBNMoX-gboIwA2sr6xd93PnjmEqxfLIGeRXXSVTYMua06taymotjQC8iciFQ9bwoqzhFGSIPxFArvcdeIg~fjZHXZQD64yBaCWIxWxCHu0AlkJIp980orc-Xn9IhRVTnOQ__",
            quote:
                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            rating: 5,
        },
        {
            id: 3,
            name: "John W.",
            role: "Designer",
            image: "https://media-hosting.imagekit.io//19a946b775d443c1/image%20(12).png?Expires=1836965093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M6IXwDQm9qvc6yJTCU~0af~py6uNDrcLuFQexjDjVDg5uERCz0qPYjE3ckV55UmILGiCGMSwCaz3rY5-jvpBxXANMzwUKfLXxHyuUAQYWlEAfoN21nGM~NuhfbAlEVXyC0DY3uejSPe2or4UB9qlWFqMC9F~ze6jPrOUSzaeGGsXiORg6SAcZB8No2wOq9ldsxN4bhkoKd7LVHhW1PEfsBNMoX-gboIwA2sr6xd93PnjmEqxfLIGeRXXSVTYMua06taymotjQC8iciFQ9bwoqzhFGSIPxFArvcdeIg~fjZHXZQD64yBaCWIxWxCHu0AlkJIp980orc-Xn9IhRVTnOQ__",
            quote: 'I was looking for "thank you for making it hassle-free and most of all hassle free! All we need."',
            rating: 5,
        },
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    return (
        <div className=" h-full md:max-w-6xl mx-auto ">
            <div className="w-full md:py-16 px-4 pb-42 md:mb-22 ">
                <div className="max-w-6xl mx-auto flex justify-center flex-col">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-medium text-gray-700 mb-3">This Is What Our Customers Say</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                        </p>
                    </div>

                    <div className="flex justify-center items-center w-full flex-col  mb-10 max-w-3xs transform md:translate-y-1/2 md:max-w-6xl mx-auto">
                        <div className="flex  justify-center md:w-full  ">
                            {testimonials.map((testimonial, index) => {
                                // Calculate position: left, center, or right
                                let position = "hidden"
                                if (index === currentIndex) {
                                    position = "z-20 scale-100 opacity-100"
                                } else if (index === currentIndex - 1 || (currentIndex === 0 && index === testimonials.length - 1)) {
                                    position = "z-10 -translate-x-[20%] scale-90 opacity-70"
                                } else if (index === currentIndex + 1 || (currentIndex === testimonials.length - 1 && index === 0)) {
                                    position = "z-10 translate-x-[20%] scale-90 opacity-70"
                                }

                                return (
                                    <div
                                        key={testimonial.id}
                                        className={`absolute transition-all duration-500 ease-in-out ${position}`}
                                        style={{ width: "100%", maxWidth: "500px" }}
                                    >
                                        <div className="bg-slate-100 rounded-lg shadow-lg p-4">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="mb-4 md:mb-0 md:mr-6 border rounded-md">
                                                    <img
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt={testimonial.name}
                                                        className="w-32 h-32 object-cover rounded-md"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-gray-700 mb-4 italic relative">"{testimonial.quote}"</p>
                                                    <div className="flex mb-2 relative">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                                            </svg>
                                                        ))}
                                                        <div className="hidden md:block md:absolute -bottom-1 left-0 w-2/3 h-[1px] border-t border-gray-600"></div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                                                    <p className="text-gray-500">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-50 md:mt-30 flex justify-center items-center space-x-4 w-full">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>

        </div>
    )
}

export default TestimonialCarousel

