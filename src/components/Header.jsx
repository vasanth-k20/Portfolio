import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-transform transform hover:scale-105">
                            MyBrand
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="hover:text-amber-400 transition-all duration-300 transform hover:translate-y-1">
                            Home
                        </a>
                        <a href="#" className="hover:text-amber-400 transition-all duration-300 transform hover:translate-y-1">
                            About
                        </a>
                        <a href="#" className="hover:text-amber-400 transition-all duration-300 transform hover:translate-y-1">
                            Projects
                        </a>
                        <a href="#" className="hover:text-amber-400 transition-all duration-300 transform hover:translate-y-1">
                            Skills
                        </a>
                        <a href="#" className="hover:text-amber-400 transition-all duration-300 transform hover:translate-y-1">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none transition-transform transform hover:scale-110"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Slide Animation */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-amber-400 focus:outline-none"
                        >
                            <X size={28} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-6 py-8">
                        <a href="#" className="text-2xl text-white hover:text-amber-400 transition-transform transform hover:scale-105">
                            Home
                        </a>
                        <a href="#" className="text-2xl text-white hover:text-amber-400 transition-transform transform hover:scale-105">
                            About
                        </a>
                        <a href="#" className="text-2xl text-white hover:text-amber-400 transition-transform transform hover:scale-105">
                            Projects
                        </a>
                        <a href="#" className="text-2xl text-white hover:text-amber-400 transition-transform transform hover:scale-105">
                            Skills
                        </a>
                        <a href="#" className="text-2xl text-white hover:text-amber-400 transition-transform transform hover:scale-105">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
