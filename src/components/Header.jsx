import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="z-50 bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg fixed top-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */} 
                    <div className="flex items-center">
                        <a href="/" className="text-3xl hover:text-yellow-200 transition-transform transform hover:scale-105">
                            VASANTH
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="px-2 text-[1.2em] hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-1">
                            Home
                        </a>
                        <a href="#about" className="px-2 text-[1.2em] hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-1">
                            About
                        </a>
                        <a href="#projects" className="px-2 text-[1.2em] hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-1">
                            Projects
                        </a>
                        <a href="#experience" className="px-2 text-[1.2em] hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-1">
                            Experience
                        </a>
                        <a href="#skills" className="px-2 text-[1.2em] hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-1">
                            Skills
                        </a>
                        <a href="#contact" className="px-2 text-[1.2em] hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-1">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 focus:outline-none transition-transform transform hover:scale-110"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Slide Animation */}
            {isOpen && (
                <div className={`md:hidden fixed top-0 right-0 h-[50vh] w-64 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} rounded-b-lg shadow-lg overflow-y-auto`}>
                <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-cyan-400 focus:outline-none"
                        >
                            <X size={28} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-6 py-8">
                        <a href="#home" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
                            Home
                        </a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
                            About
                        </a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
                            Projects
                        </a>
                        <a href="#experience" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
                            Experience
                        </a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
                            Skills
                        </a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
