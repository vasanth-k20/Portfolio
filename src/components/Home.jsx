import React from 'react';
import { motion } from 'framer-motion';
import { RiMessage2Line } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const Home = () => {
    return (
        <section
            id="home"
            // style={{ backgroundImage: "url('/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative flex flex-col md:flex-row items-center min-h-screen px-6 text-center md:text-left max-w-[100%] mx-auto ">
                {/* Profile Photo */}
                <motion.div
                    className="flex justify-center mt-10 md:mt-0 md:ml-10 lg:ml-90"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.img
                        src="/asanth.jpg"
                        alt="Vasanth"
                        className="h-[15em] w-[15em] md:h-[22em] md:w-[22em] rounded-full object-cover border-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-70">
                    
                    <motion.h6
                        className="text-gray-900 text-2xl md:text-3xl leading-tight mb-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    >
                        Junior Software Developer
                    </motion.h6>
                    
                    <motion.h1
                        className="text-3xl md:text-6xl text-gray-800 tracking-wide mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <span className="not-italic">Vasanth</span>
                    </motion.h1>

                    <motion.p
                        className="italic text-gray-600 text-sm md:text-xl max-w-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                    >
                        I enjoy building software that people find useful. I like solving problems and creating things that can make daily tasks easier.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                    >
                        <a
                            href="https://your-resume-link.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-3 font-medium md:font-semibold bg-gray-700 text-gray-50 text-xs md:text-lg rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L11 14.586V4a1 1 0 011-1zM5 20a1 1 0 100-2h14a1 1 0 100 2H5z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                            Get my CV
                        </a>

                        <a
                            href="#contact"
                            className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3 font-medium md:font-semibold border-2 border-gray-700 text-gray-700 text-xs md:text-lg rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
                        >
                           <RiMessage2Line/> <p className="pl-2.5">Contact</p>
                        </a>
                    </motion.div>

                    {/* Social Media Icons */}
                    <motion.div
                        className="flex gap-4 mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
                    >
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                        <a 
                            href="https://twitter.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaTwitter className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                        <a 
                            href="https://instagram.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};