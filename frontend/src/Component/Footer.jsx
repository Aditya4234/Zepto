import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Smartphone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100 font-sans">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#36005c] mb-6 tracking-tighter">Zepto</h2>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36005c] hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36005c] hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36005c] hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36005c] hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">About Us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Careers</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Press</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Help & Support</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Partner with us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Ride with us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#36005c] transition-colors font-medium">Customer Support</a></li>
                        </ul>
                    </div>

                    {/* App Download Column */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">Download App</h3>
                        <div className="space-y-4">
                            <button className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl w-full hover:bg-gray-800 transition-colors shadow-lg">
                                <Smartphone className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Get it on</div>
                                    <div className="text-sm font-bold">Google Play</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl w-full hover:bg-gray-800 transition-colors shadow-lg">
                                <Smartphone className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Download on the</div>
                                    <div className="text-sm font-bold">App Store</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm font-medium">© 2024 Zepto Clone. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
