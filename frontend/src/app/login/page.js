"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="p-4 flex items-center gap-4 border-b border-gray-100">
                <Link href="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-800" />
                </Link>
                <h1 className="text-xl font-bold text-gray-900">Login</h1>
            </header>

            {/* Content */}
            <div className="max-w-md mx-auto px-6 py-12 flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mb-8 rotate-12">
                    <span className="text-4xl">🍇</span>
                </div>
                
                <h2 className="text-2xl font-black text-[#36005c] mb-2 text-center">Welcome Back</h2>
                <p className="text-gray-500 mb-8 text-center text-sm">Enter your number to login or sign up</p>

                <div className="w-full space-y-4">
                    <div className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 focus-within:border-[#ff3269] focus-within:bg-white transition-all flex items-center gap-3">
                        <span className="font-bold text-gray-500 border-r border-gray-300 pr-3">+91</span>
                        <input 
                            type="tel" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter phone number" 
                            className="bg-transparent w-full outline-none font-bold text-lg text-gray-900 placeholder-gray-400"
                            maxLength={10}
                        />
                    </div>

                    <Link href="/">
                        <button className="w-full bg-[#ff3269] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#e62e5f] active:scale-95 transition-all mt-4">
                            Continue
                        </button>
                    </Link>

                    <p className="text-[10px] text-gray-400 text-center mt-6 leading-relaxed">
                        By continuing, you agree to our <a href="#" className="underline decoration-dotted">Terms of Service</a> & <a href="#" className="underline decoration-dotted">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
