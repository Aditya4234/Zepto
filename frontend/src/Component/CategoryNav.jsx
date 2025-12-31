'use client';
import React from 'react';
import { ShoppingBag, Snowflake, Sparkles, Headphones, Shirt, Gift, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
    { name: 'All', icon: ShoppingBag, slug: '', color: 'text-orange-400' },
    { name: 'Winter', icon: Snowflake, slug: 'winter', color: 'text-blue-400' },
    { name: 'Beauty', icon: Sparkles, slug: 'beauty', color: 'text-pink-400' },
    { name: 'Electronics', icon: Headphones, slug: 'electronics', color: 'text-yellow-400' },
    { name: 'Fashion', icon: Shirt, slug: 'fashion', color: 'text-purple-400' },
    { name: 'Gifting', icon: Gift, slug: 'gifting', color: 'text-red-400' },
];

const CategoryNav = () => {
    const pathname = usePathname();

    const isActive = (slug) => {
        if (slug === '' && pathname === '/') return true;
        if (slug && pathname.includes(`/category/${slug}`)) return true;
        return false;
    };

    return (
        <div className="bg-[#0b0c2a] sticky top-[130px] z-40 pb-4 pt-2">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between gap-4 overflow-x-auto no-scrollbar py-2">
                    {categories.map((cat) => {
                        const active = isActive(cat.slug);
                        return (
                            <Link
                                key={cat.name}
                                href={cat.slug ? `/category/${cat.slug}` : '/'}
                                className="flex flex-col items-center gap-2 min-w-[70px] group transition-all"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? 'bg-white/10 scale-110 shadow-lg shadow-purple-500/20' : 'bg-[#1a1b3a] group-hover:bg-[#25264a] border border-white/5'}`}>
                                    <cat.icon className={`w-7 h-7 ${cat.color} drop-shadow-md`} />
                                </div>
                                <span className={`text-xs font-medium tracking-wide ${active ? 'text-white font-bold' : 'text-gray-300 group-hover:text-white'}`}>
                                    {cat.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
