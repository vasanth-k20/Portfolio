import React from "react";
import { Linkedin, Github } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Layout for Desktop, Stack on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Brand and Description */}
                    <div className="space-y-4">
                        <div className="text-3xl hover:text-yellow-400 transition-transform transform hover:scale-105">
                            VASANTH
                        </div>
                        <p className="text-gray-400 text-[1.2em]">
                            Empowering businesses with innovative solutions and cutting-edge technology.
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-4 text-[1.2em]">
                        <h3 className="text-2xl font-semibold text-yellow-400">Quick Links</h3>
                        <a href="#home" className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:translate-x-2">
                            Home
                        </a>
                        <a href="#about" className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:translate-x-2">
                            About
                        </a>
                        <a href="#projects" className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:translate-x-2">
                            Projects
                        </a>
                        <a href="#experience" className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:translate-x-2">
                            Experience
                        </a>
                        <a href="#skills" className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:translate-x-2">
                            Skills
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-yellow-300 transition-transform transform hover:translate-x-2">
                            Contact
                        </a>
                    </div>

                    {/* Social Icons and Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-2xl font-semibold text-yellow-400">Follow Me</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-transform transform hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-transform transform hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold text-yellow-400">Contact Info</h3>
                            <p className="text-gray-400 text-[1.2em]">Email: info@mybrand.com</p>
                            <p className="text-gray-400 text-[1.2em]">Phone: +1 (123) 456-7890</p>
                        </div>
                    </div>
                </div>

                {/* Copyright - Always Centered */}
                <div className=" text-[1.2em] mt-8 pt-6 border-t border-gray-500 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} All rights are reserved.
                </div>
            </div>
        </footer>
    );
};
