import React from 'react';
import ProductCard from '../ProductCard';

const Home = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-orange-500 to-red-600 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Home Sweet Home</h1>
                    <p className="text-orange-50 text-lg opacity-90">Essentials for every corner.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Cotton Bedsheet", price: 899, originalPrice: 1299, weight: "Double Bed", image: "🛌" },
                    { title: "Ceramic Mug Set", price: 450, originalPrice: 600, weight: "2 pcs", image: "☕" },
                    { title: "Non-stick Pan", price: 1200, originalPrice: 1500, weight: "24cm", image: "🍳" },
                    { title: "Scented Candle", price: 299, originalPrice: 450, weight: "1 pc", image: "🕯️" },
                    { title: "Storage Box", price: 350, originalPrice: 500, weight: "Large", image: "📦" },
                    { title: "Floor Mop", price: 799, originalPrice: 999, weight: "1 unit", image: "🧹" },
                    { title: "Kitchen Towel", price: 150, originalPrice: 250, weight: "3 pcs", image: "🧼" },
                    { title: "Door Mat", price: 199, originalPrice: 299, weight: "1 pc", image: "🚪" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="15 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
