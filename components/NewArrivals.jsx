"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import Card from "./Card"

const NewArrivals = () => {
    // State for active category
    const [activeCategory, setActiveCategory] = useState("Women's Fashion")

    // Categories data
    const categories = ["Men's Fashion", "Women's Fashion", "Women Accessories", "Men Accessories", "Discount Deals"]

    // Products data
    const products = [
        {
            id: 1,
            name: "Shiny Dress",
            brand: "Al Karam",
            image: "https://media-hosting.imagekit.io//2ad3fa5393174733/Images.png?Expires=1836900489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f7rjz-19qAoJVWUsL21A2s9cFnzQPmnGqpNbNYUM6Mqsvui6J5MAAouZO1Gqq8mrCRik8Jsrca3283B5J7kciM5HHZP4lZITYzKveNQeU-rNUN3ldRlxM5rQQ0vZij8TzLsdXjpp9bgNiq0evdLpeypK2bYIhYOxqzdQJt9yNxHq8wXDT3dhJiD5wPQHD670G5INr~8Ana1OBlk~btcX-MJzHUQuFRWhjIQoHEdtL3pGeevcPIkUx0cbsVo7dYOIBh79sbcKj2ou89AkZKZk4ga~sMHJEXPdOIiqC3iG17bxmTzJ6-L4NjKFnTQwFSeWAUhEC86M6cBt4YvFqmQAqQ__",
            rating: 5,
            reviews: 4.5,
            price: 95.5,
            almostSoldOut: true,
        },
        {
            id: 2,
            name: "Long Dress",
            brand: "Al Karam",
            image: "https://media-hosting.imagekit.io//928ad69230944c3c/Images%20(5).png?Expires=1836900570&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jf7kVJEuOqsvucv1lRUh8CvFZux3JDGz0WOveA07eJVrBcOzP4WUK44YtOApBYr9hbEURMOkiVFhbPmXQdU4mZE3MUijz4sA-UalxWHN~3QVE4kj~mZ3pSxO~qtYLIvODCmQOaqwP2jK1VlcDtzCgDQP5sfWFG54GWx686izKPtFPEoswCxUmlSry8cca1BPvxV6n850u9nzxB~EqAv~cfsn8VHoT2MkaBy9cScuAI3YUHW0YsotxQ6eHrgZG4m8Z6-l9zsB~JC8MBVE-dVOhnEk~FuLPNo3xxjb0FjGICknw2wlS8iKzgIVyJZrLJR01W0pwP53Fqwe6M0Mmxf-Xw__",
            rating: 5,
            reviews: 4.5,
            price: 95.5,
            almostSoldOut: true,
        },
        {
            id: 3,
            name: "Full Sweater",
            brand: "Al Karam",
            image: "https://media-hosting.imagekit.io//84506944c3de4550/Images%20(4).png?Expires=1836900571&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KNeLNOY7GQy2EFg9HROmAdAGU87O9rgBymDsl717d0PRS~RSwULfoAFsaSK-B1dxDWOdW3keuvvQ5~E2lW32sNmk7Tv6H7~RHdfN1HXsxzzNRVN4X6AOOqZp1QwfYYAKydk~IDLLXvEygQalX8VfTqy2cmXx1bcc9Qxon4zC4CzmIak2AdOceFFBkygmJVpVox0oqXU8v3M0tpWiSqLfvz7Xtq97CjSEMLusR~JLKkMPQxPnZK1SaGNEqeFq2ozOALO5HRbdjqcXh~iw4tKUAfqOZBjrjdo~XAltzGafDzNG-uMGujicfQxJYZhzCXkXHHWs2Vt7DhB-qczltfz9jg__",
            rating: 5,
            reviews: 4.5,
            price: 95.5,
            almostSoldOut: true,
        },
        {
            id: 4,
            name: "White Dress",
            brand: "Al Karam",
            image: "https://media-hosting.imagekit.io//cb98d2f4eb514798/Images%20(3).png?Expires=1836900572&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P2PW~pZfzfDSjaYieX7mKmmo3E-ZdysN9Ct6c1FhImljjQI3iZXs0AO0sXqPf444s7qwFH9ZC8~8szKtebAPZN97uShKyncxxPiwrfYzr9dpyDFURx6byf5XXjMP0gBiEspKDJVGCbw~YrykBLVo0H4lY0J4cK9nnNH47jGvkZriS1chNX7ZjZKOl-an~AXnH9~7egKWtDQKABuhzduedafYPjHY8pLGB74kycCm1PXtf~WwhfnIHKpnoxg-jyrtZRxod2OZmJzV-v626LVUjGYCJEHjNofSMJlNXKqHn40Ylkc-auWC0tNdQxqrT4iO586LP9Qw0lp~VVvr4m~c2w__",
            rating: 5,
            reviews: 4.5,
            price: 95.5,
            almostSoldOut: true,
        },
        {
            id: 5,
            name: "Colorful Dress",
            brand: "Al Karam",
            image: "https://media-hosting.imagekit.io//1228dca872824ec7/Images%20(2).png?Expires=1836900572&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fKipWxq~HNzM25P61FR5SBNSybFCvhQXtDNeLST6q15Fee2NuWTcUGD-4guBtldS0NlwG6tRY4T2v4v02UcK2SE4QuBE4~oCgOv5nJXpIElrX6EKNJj2Qeg0LnhMdVSSCYRmVuyuw-nFAl-pHBUqrIwuuKGpsKA3HwaIbIfa3vt0Shw5Wf9tVvFRooRAWso-6YKpbLTGajIyEdCP7HkjMqNRZLetcPzvPJpQcpXIcDLSdE4eAk-F8DmiynvBG2VwWSMpBIDslMT9jkEJuLvRIwuJxIV3B1F0mJBBO5qGWuPJZQKbtdCPa~JrzZ6isEPpCCfJFAfKa66HZi6f4cc38A__",
            rating: 5,
            reviews: 4.5,
            price: 95.5,
            almostSoldOut: true,
        },
        {
            id: 6,
            name: "White Shirt",
            brand: "Al Karam",
            image: "https://media-hosting.imagekit.io//34a952f19aab48c0/Images%20(1).png?Expires=1836900573&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rGynLl9apH7tosjAIeAbQMjLlQAxekSHTG5kVfD0Hr1kQqBoHMDw6FWSQczCLCXiLC5WmJpQnfHTVXd-bWVY33O~hEPO~wmVtPIj5Vi2sQYmx9bWtEzkOKuEf9F~qER-0Mxob6ASj~ktYw6I0Vp8RZzSrk3LvoNLNS5PGnAfRaZzk6lbZUptXlu4Cca79WGzvx9X49a3S43arCNS6rRCAO-0Y9gAx~E~eqEPDYbV6uABW-sYcXGygP5hPxpwoAynhPZBkq5SJagBqsajyx3abgtyrFaGqo--UMCCGS9YH4aOBJyg407iGcH4GCLwvN7uq8EGyffWrgTbi7CC5oPTHw__",
            rating: 5,
            reviews: 4.5,
            price: 95.5,
            almostSoldOut: true,
        },
    ]


    return (
        <div className="max-w-6xl mx-auto px-4 py-12 ">
            {/* Heading and description */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">New Arrivals</h2>
                <p className="max-w-2xl mx-auto text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
                    Scelerisque duis ultrices sollicitudin
                </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full transition-all ${activeCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

            {/* View more button */}
            <div className="flex justify-center mt-10">
                <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">View More</button>
            </div>
        </div>
    )
}

export default NewArrivals

