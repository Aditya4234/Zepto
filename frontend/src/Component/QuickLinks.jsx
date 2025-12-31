import React from 'react';
import { Beer, Cookie, Plane, Sparkles, Gift, Speaker, Wine, UtensilsCrossed } from 'lucide-react';

const categories = [
    { name: 'Raise the Bar', icon: Beer, gradient: 'from-pink-500 to-rose-500', iconColor: 'text-pink-100' },
    { name: 'Snack Attack', icon: Cookie, gradient: 'from-orange-400 to-amber-500', iconColor: 'text-amber-100' },
    { name: 'Sweet & Chill Treats', icon: UtensilsCrossed, gradient: 'from-yellow-400 to-orange-500', iconColor: 'text-yellow-100' },
    { name: 'Ready for Takeoff', icon: Plane, gradient: 'from-blue-400 to-cyan-500', iconColor: 'text-cyan-100' },
    { name: 'Shine All Night', icon: Sparkles, gradient: 'from-purple-500 to-indigo-500', iconColor: 'text-purple-100' },
    { name: 'Party Mode On', icon: Speaker, gradient: 'from-fuchsia-500 to-purple-600', iconColor: 'text-fuchsia-100' },
    { name: 'Barware & Disposables', icon: Wine, gradient: 'from-red-500 to-pink-600', iconColor: 'text-red-100' },
    { name: 'Your Gift Zone', icon: Gift, gradient: 'from-emerald-400 to-teal-500', iconColor: 'text-emerald-100' },
];

const QuickLinks = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {categories.map((cat, index) => (
                    <div key={index} className="flex flex-col gap-3 group cursor-pointer">
                        <div className={`aspect-square rounded-[24px] bg-[#121230] border border-blue-500/20 p-5 flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 group-hover:-translate-y-1`}>
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>

                            {/* Icon Container */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <cat.icon className={`w-10 h-10 ${cat.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110`} />
                            </div>
                        </div>
                        <div className="text-center px-1">
                            <span className="text-[13px] font-bold text-gray-200 leading-tight block group-hover:text-blue-300 transition-colors line-clamp-2">
                                {cat.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickLinks;
