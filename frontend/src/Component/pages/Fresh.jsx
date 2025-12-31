import React from 'react';
import ProductCard from '../ProductCard';

const Fresh = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-green-600 to-emerald-800 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Fresh from Farm</h1>
                    <p className="text-green-50 text-lg opacity-90">Organic vegetables and sweet fruits.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Shimla Apple", price: 180, originalPrice: 220, weight: "1 kg", image: "🍎" },
                    { title: "Organic Banana", price: 45, originalPrice: 60, weight: "500g", image: "🍌" },
                    { title: "Iceberg Lettuce", price: 65, originalPrice: 90, weight: "1 pc", image: "🥬" },
                    { title: "Red Cherry Tomato", price: 55, originalPrice: 80, weight: "250g", image: "🍅" },
                    { title: "Fresh Broccoli", price: 95, originalPrice: 130, weight: "1 pc", image: "🥦" },
                    { title: "Sweet Corn", price: 30, originalPrice: 45, weight: "1 pc", image: "🌽" },
                    { title: "Alphonso Mango", price: 450, originalPrice: 550, weight: "1 kg", image: "🥭" },
                    { title: "Kiwi Fruit", price: 120, originalPrice: 160, weight: "3 pcs", image: "🥝" },
                    { title: "Pomegranate", price: 140, originalPrice: 190, weight: "500g", image: "🍎" },
                    { title: "Baby Spinach", price: 40, originalPrice: 60, weight: "100g", image: "🍃" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="8 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Fresh;
