"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const DealsOfTheMonth = () => {
    // State for countdown timer
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 6,
        minutes: 5,
        seconds: 30,
    })

    // State for carousel
    const [currentSlide, setCurrentSlide] = useState(0)

    // Deals data
    const deals = [
        {
            id: 1,
            image: "https://media-hosting.imagekit.io//ef6622b4209e4197/image%20(2).png?Expires=1836898232&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=C-vYoOchadKwd1vKOW54wVptY9X7ax19zXoUfTVXjle1ytf~5dnMxiG3cnOaAVk-8sc6cCHuH9g-z1zjrXwges1A3~4Y4LhyKaaAOP7NSvogpnkih-z5HkGZ0l2ehXXnKGVNQ42JFkEWtdZtTVuT7WrYi8nvKOZQhiIf5Hjv5P1rNgOx3zk3ZkZv-5RHTJB72w16yyC6CCjCr5Nc~j1NX9aKFQi0qy5s1YvZ3BjIfqyoH~h96AVWoFoyiZ7pAfW-sXPg7~e4cQvey4h0aOxGNl8kGHPbEx6cOijOXcKYbDzrcUecCAokvwO2EtsoHI-yyso5H8CEPfwmLdqfyfMyQQ__",
            label: "Spring Sale",
            discount: "30% OFF",
        },
        {
            id: 2,
            image: "https://media-hosting.imagekit.io//a4066d8d36a4451d/image%20(3).png?Expires=1836899632&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BLdvRl0G6EI3S7o~joGe2EFABOZdBDVdqwgGlQupUbOhb1tKXsuv1dMTKCtHi~9kKtlB7ApdLqzG3uNVy5H8sgkZ1ShtL~paZGftv4G3ecGNluJqf~UDcICAKzCBdkyjUzRVSvYaatWYouFUWzmH4MYCrjUBH84NYzQUEesFl-U0TTJxPNEWTBVmA9W5TFwqnp~wGMWEQhA28fXuDCIKARdTrq6WfW7fCuurlCwy0rZsOsmagBfDnaghN6g6gOigm9yLAPPm0CMv9csKd4ztJl89JVZABhCw~OCF~paf0E-yE4UeMa9hvYG6EjWa9JeFCkeVMWWAKABtRhlOBTrw9w__",
            label: "Summer Collection",
            discount: "25% OFF",
        },
        {
            id: 3,
            image: "https://media-hosting.imagekit.io//b959884c1e214c69/image%20(5).png?Expires=1836899656&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jqIkECgRw8fOrKfXmXxeMbppWqXVHpFjhdeLNbwwhw18EUnZVLQ2TFKEeXXsSG0geueiRTTE3C8EAeRyWTAu-dh55G2gm1TScQdc5pJz7LgHIH9JVUuNJuYU4GKKg-yeW4ZljwYkbajiM8yWKdWMyYEAHB-n6-S6i5UFJiBEnEXNQoG0TPFPWvvVTOYUbBbjoG0wNv0m-Iav6VDunVqTSEr2adgBtOxdofEUL2jFQABkrLlpVoRSIbGj~LnQDWdT1ClUob~Ynyy~W5G1biZBtJL60ODsQhmbnQ0IvOJbCcBjhdRoKrCG9GAk7fgb-kyuoA~qsqQpYPU~fk373gMuVw__",
            label: "New Arrivals",
            discount: "15% OFF",
        },
    ]

    // Countdown timer effect
    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft.seconds > 0) {
                setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 })
            } else if (timeLeft.minutes > 0) {
                setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 })
            } else if (timeLeft.hours > 0) {
                setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 })
            } else if (timeLeft.days > 0) {
                setTimeLeft({ ...timeLeft, days: timeLeft.days - 1, hours: 23, minutes: 59, seconds: 59 })
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [timeLeft])

    // Handle carousel navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === deals.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? deals.length - 1 : prev - 1))
    }

    // Format time with leading zeros
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side - Text and Timer */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Deals Of The Month</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
                        Scelerisque duis ultrices sollicitudin.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition ease-in-out duration-300">Buy Now</button>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-4 text-center md:text-start">Hurry, Before It's Too Late!</h3>

                        <div className="flex space-x-4 justify-center md:justify-start">
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center text-xl font-bold border border-gray-200">
                                    {formatTime(timeLeft.days)}
                                </div>
                                <span className="text-sm mt-1">Days</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center text-xl font-bold border border-gray-200">
                                    {formatTime(timeLeft.hours)}
                                </div>
                                <span className="text-sm mt-1">Hr</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center text-xl font-bold border border-gray-200">
                                    {formatTime(timeLeft.minutes)}
                                </div>
                                <span className="text-sm mt-1">Mins</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-14 h-14 flex items-center justify-center text-xl font-bold border border-gray-200">
                                    {formatTime(timeLeft.seconds)}
                                </div>
                                <span className="text-sm mt-1">Sec</span>
                            </div>
                        </div>
                        <div className="relative p-2 mb-2   w-full">
                            <button
                                onClick={prevSlide}
                                className="absolute w-fit bg-gray-100 left-1/3  shadow-black  md:bottom-0 md:left-100 md:right-10   rounded-full p-2 shadow-md hover:bg-gray-100"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute left-1/2 w-fit bg-gray-100   shadow-black md:bottom-0 md:left-120   md:right-0  rounded-full p-2 shadow-md hover:bg-gray-100"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right side - Product Carousel */}
                <div className="relative">
                    <div className="overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {deals.map((deal, index) => (
                                <div key={deal.id} className="min-w-full h-full relative">
                                    <img
                                        src={deal.image || "/placeholder.svg"}
                                        alt={`Deal ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded">
                                        <div className="text-sm text-gray-500">{`0${index + 1} — ${deal.label}`}</div>
                                        <div className="font-bold">{deal.discount}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {/* <button
                        onClick={prevSlide}
                        className="absolute -left-25 bottom-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -left-10 bottom-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    >
                        <ChevronRight size={20} />
                    </button> */}

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {deals.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-black" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsOfTheMonth

