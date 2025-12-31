"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header = () => {
    const { openCart } = useCart();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#0b0c2a] text-white shadow-lg transition-all pt-4">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
                {/* Top Row: Logo, Location & Profile */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        {/* Enhanced Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <div className="relative group">
                                <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                                    zepto
                                </h1>
                                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80"></div>
                            </div>
                        </Link>

                        {/* Location */}
                        <div className="hidden md:flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors">
                            <svg className="w-4 h-4 text-[#ff3269]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <div className="flex flex-col leading-none">
                                <span className="text-[10px] text-gray-300 font-medium uppercase tracking-wider">Delivering to</span>
                                <span className="text-sm font-bold truncate max-w-[150px]">Mumbai, India</span>
                            </div>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Quick Access Pills */}
                        <div className="hidden md:flex items-center gap-3">
                            <button className="flex flex-col items-center justify-center bg-white text-[#36005c] px-4 py-1.5 rounded-xl min-w-[80px] h-[45px] shadow-sm active:scale-95 transition-transform">
                                <span className="text-[10px] font-black leading-none">50%</span>
                                <span className="text-[9px] font-bold leading-none tracking-wide text-gray-500">OFF ZONE</span>
                            </button>
                            <button className="flex items-center justify-center gap-1 bg-white text-[#36005c] px-4 py-1.5 rounded-xl min-w-[80px] h-[45px] shadow-sm active:scale-95 transition-transform">
                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                                </svg>
                                <span className="text-sm font-bold">Fresh</span>
                            </button>
                        </div>

                        {/* Cart Button */}
                        <button
                            onClick={openCart}
                            className="relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-[#ff3269] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </button>

                        {/* Login / Profile Button */}
                        <div className="relative">
                            {isLoggedIn ? (
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                        AD
                                    </div>
                                    <span className="hidden sm:block font-medium">Aditya</span>
                                    <svg className={`w-4 h-4 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            ) : (
                                <Link href="/login">
                                    <button className="bg-white text-black px-5 py-2 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                                        Login
                                    </button>
                                </Link>
                            )}

                            {/* Profile Dropdown */}
                            {isLoggedIn && showProfileMenu && (
                                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden py-2 text-gray-800 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-500">Signed in as</p>
                                        <p className="font-bold text-[#36005c]">aditya@example.com</p>
                                    </div>

                                    <div className="py-2">
                                        <button className="w-full text-left px-4 py-2 hover:bg-purple-50 flex items-center gap-3 transition-colors group">
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#36005c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                            <span className="font-medium">Your Orders</span>
                                        </button>
                                        <button className="w-full text-left px-4 py-2 hover:bg-purple-50 flex items-center gap-3 transition-colors group">
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#36005c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            <span className="font-medium">Your Refunds</span>
                                        </button>
                                        <button className="w-full text-left px-4 py-2 hover:bg-purple-50 flex items-center gap-3 transition-colors group">
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#36005c]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            <span className="font-medium">Addresses</span>
                                        </button>
                                    </div>

                                    <div className="border-t border-gray-100 pt-2">
                                        <button
                                            onClick={() => setIsLoggedIn(false)}
                                            className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 flex items-center gap-3 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span className="font-medium">Log Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Search Bar & Mobile Location */}
                <div className="flex flex-col gap-3">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-[#ff3269] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-12 pr-4 py-3.5 bg-white text-gray-900 placeholder-gray-400 rounded-2xl font-medium focus:ring-2 focus:ring-[#ff3269] outline-none shadow-lg transition-all"
                            placeholder="Search for &quot;Earphones&quot;"
                        />
                    </div>

                    {/* Mobile Location strip */}
                    <div className="md:hidden flex items-center justify-between text-xs font-medium text-gray-300 px-1">
                        <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-[#ff3269]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Delivering to </span>
                            <span className="font-bold text-white">Mumbai, India</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
