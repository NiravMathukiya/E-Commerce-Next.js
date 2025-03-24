import { Star } from 'lucide-react'
import React from 'react'

const Card = ({ product }) => {
    return (
        <div>
            <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
                {/* Product image */}
                <div className="h-80 overflow-hidden">
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product details */}
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-medium text-lg">{product.name}</h3>
                            <p className="text-sm text-gray-500">At {product.brand}</p>
                        </div>
                        <div className="flex">{renderStars(product.rating)}</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">({product.reviews}) Customer Reviews</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                        {product.almostSoldOut && <span className="text-red-500 text-sm">Almost Sold Out</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

const renderStars = (rating) => {
    return Array(rating)
        .fill()
        .map((_, index) => <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />)
}