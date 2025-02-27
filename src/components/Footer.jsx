import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Layout for Desktop, Stack on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Brand and Description */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-transform transform hover:scale-105">
                            MyBrand
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering businesses with innovative solutions and cutting-edge technology.
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-semibold text-amber-400">Quick Links</h3>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:translate-x-2">
                            Home
                        </a>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:translate-x-2">
                            About
                        </a>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:translate-x-2">
                            Projects
                        </a>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:translate-x-2">
                            Skills
                        </a>
                        <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:translate-x-2">
                            Contact
                        </a>
                    </div>

                    {/* Social Icons and Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-semibold text-amber-400">Follow Me</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-amber-400">Contact Info</h3>
                            <p className="text-gray-400 text-sm">Email: info@mybrand.com</p>
                            <p className="text-gray-400 text-sm">Phone: +1 (123) 456-7890</p>
                        </div>
                    </div>
                </div>

                {/* Copyright - Always Centered */}
                <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} MyBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
