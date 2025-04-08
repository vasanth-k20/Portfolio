import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="min-h-[70vh] flex items-center py-16 px-6 md:px-12 lg:px-24 mb-0 bg-neutral-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">

                {/* Profile Image with Hover Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                    class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
                >
                    <img
                        src="/aboutgif.gif"
                        alt="Profile GIF"
                        class="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl transition duration-300"
                    />
                </motion.div>

                {/* About Me Text */}
                <div class="w-full md:w-1/2 px-4 md:px-8 lg:pl-16 text-center md:text-left">
                <motion.h2
                    class="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 md:mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    About Me
                </motion.h2>
                    <p class="text-lg md:text-xl leading-relaxed mb-4 text-justify">
                        Hi, I'm a <span className="text-grey-700 font-bold">Junior Software Developer</span> with a passion for building efficient and scalable applications. I specialize in <span className="text-grey-700 font-bold">C#, ASP.NET Core, SQL, Azure DevOps,</span> and <span className="text-grey-700 font-bold">ReactJS</span>. I thrive on solving complex problems and constantly aim to improve my skills.
                    </p>
                    <p class="text-lg md:text-xl leading-relaxed mb-4 text-justify">
                        With a strong foundation in both backend and frontend development, I enjoy transforming ideas into real-world applications. My experience with Azure DevOps helps me streamline development workflows and ensure high-quality deliverables.
                    </p>
                    <p class="text-lg md:text-xl leading-relaxed mb-4 text-justify">
                        I am eager to collaborate on challenging projects that push my limits and allow me to grow as a developer. Let's connect and create something incredible together!
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;