import React from 'react';
import ProductCard from '../ProductCard';

const Cafe = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-amber-600 to-orange-700 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Zepto Cafe</h1>
                    <p className="text-amber-50 text-lg opacity-90">Hot coffees and delicious snacks.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Hot Cappuccino", price: 149, originalPrice: 199, weight: "250ml", image: "☕" },
                    { title: "Iced Americano", price: 129, originalPrice: 169, weight: "300ml", image: "🧊" },
                    { title: "Chocolate Muffin", price: 89, originalPrice: 110, weight: "1 pc", image: "🧁" },
                    { title: "Paneer Tikka Sandwich", price: 179, originalPrice: 220, weight: "1 pc", image: "🥪" },
                    { title: "Butter Croissant", price: 110, originalPrice: 140, weight: "1 pc", image: "🥐" },
                    { title: "Cold Brew Coffee", price: 199, originalPrice: 249, weight: "200ml", image: "🥤" },
                    { title: "Classic Cheeseburger", price: 159, originalPrice: 199, weight: "1 pc", image: "🍔" },
                    { title: "French Fries", price: 99, originalPrice: 120, weight: "Large", image: "🍟" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="10 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cafe;
