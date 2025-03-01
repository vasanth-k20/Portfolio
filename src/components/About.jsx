import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="min-h-[70vh] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 mt-0">
            <div className="max-w-5xl w-[100%] mx-auto flex flex-col md:flex-row items-center">

                {/* Animated & Hover Effect on Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }} // Wiggle effect on hover
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <img
                        src="/aboutgif.gif"
                        alt="Profile GIF"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl transition duration-300"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
                    <h2 className="text-5xl font-bold mb-6">About Me</h2>
                    <p className="text-lg leading-relaxed">
                        I am a passionate software developer skilled in React.js, Next.js, AWS, and Three.js.
                        I enjoy crafting immersive web experiences and solving complex technical challenges.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        With experience in frontend and cloud technologies, I aim to build scalable and efficient applications.
                        Let's create something amazing together!
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;

