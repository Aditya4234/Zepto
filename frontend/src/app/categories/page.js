"use client";
import React from 'react';
import Header from "@/Component/header";
import BottomNav from "@/Component/BottomNav";
import { Beer, Cookie, Plane, Sparkles, Gift, Speaker, Wine, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

const categories = [
    { name: 'Raise the Bar', icon: Beer, gradient: 'from-pink-500 to-rose-500', slug: 'alcohol' },
    { name: 'Snack Attack', icon: Cookie, gradient: 'from-orange-400 to-amber-500', slug: 'snacks' },
    { name: 'Sweet & Chill', icon: UtensilsCrossed, gradient: 'from-yellow-400 to-orange-500', slug: 'sweets' },
    { name: 'Ready for Takeoff', icon: Plane, gradient: 'from-blue-400 to-cyan-500', slug: 'travel' },
    { name: 'Shine All Night', icon: Sparkles, gradient: 'from-purple-500 to-indigo-500', slug: 'beauty' },
    { name: 'Party Mode On', icon: Speaker, gradient: 'from-fuchsia-500 to-purple-600', slug: 'party' },
    { name: 'Barware', icon: Wine, gradient: 'from-red-500 to-pink-600', slug: 'drinks' },
    { name: 'Your Gift Zone', icon: Gift, gradient: 'from-emerald-400 to-teal-500', slug: 'gifts' },
];

const CategoriesPage = () => {
    return (
        <main className="min-h-screen bg-[#0b0c2a] pb-24">
            <Header />
            <div className="max-w-[1600px] mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-white mb-6">All Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {categories.map((cat, index) => (
                        <Link 
                            key={index} 
                            href={`/category/${cat.slug}`}
                            className="bg-[#121230] border border-blue-500/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 transition-all group"
                        >
                            <div className={`p-4 rounded-full bg-gradient-to-br ${cat.gradient} group-hover:scale-110 transition-transform`}>
                                <cat.icon className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-white font-bold text-center">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <BottomNav />
        </main>
    );
};

export default CategoriesPage;
