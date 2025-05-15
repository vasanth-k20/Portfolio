import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="min-h-[70vh] flex items-center py-16 px-6 md:px-12 lg:px-24 mb-0 bg-neutral-100">
            <div className="max-w-7xl mx-auto w-full flex flex-col">

                {/* Top Line with Circles */}
                <div className="flex items-center space-x-2 mb-10 mt-5   ">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#202B3B' }}></span>
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#202B3B' }}></span>
                    <div className="flex-1 h-[5px] rounded-full ml-3" style={{ backgroundColor: '#202B3B' }}></div>
                </div>

                <div className="flex flex-col md:flex-row items-center">

                    {/* About Me Text */}
                    <div className="w-full md:w-1/2 px-4 md:px-8 lg:pl-16 text-center md:text-left">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 md:mb-6 text-[#202B3B]"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Who I am
                        </motion.h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-4 text-justify text-gray-800">
                            Hi, I'm a <span className="text-gray-700 font-bold">Junior Software Developer</span> with a passion for building efficient and scalable applications. I specialize in <span className="text-gray-700 font-bold">C#, ASP.NET Core, SQL, Azure DevOps,</span> and <span className="text-gray-700 font-bold">ReactJS</span>. I thrive on solving complex problems and constantly aim to improve my skills.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-4 text-justify text-gray-800">
                            With a strong foundation in both backend and frontend development, I enjoy transforming ideas into real-world applications. My experience with Azure DevOps helps me streamline development workflows and ensure high-quality deliverables.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-4 text-justify text-gray-800">
                            I am eager to collaborate on challenging projects that push my limits and allow me to grow as a developer. Let's connect and create something incredible together!
                        </p>
                    </div>

                    {/* Profile Image with Hover Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                        className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
                    >
                        <img
                            src="/aboutgif.gif"
                            alt="Profile GIF"
                            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl transition duration-300"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
