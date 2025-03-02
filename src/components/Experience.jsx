import React from 'react'
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Full Stack Developer at Brain Insight",
        date: "2023 - Present",
        description: "Built responsive web applications, integrated third-party APIs, mentored junior developers, and implemented CI/CD pipelines.",
        color: "bg-black",
    },
    {
        title: "Frontend Developer as a Freelancer",
        date: "2022 - 2023",
        description: "Built responsive web applications with React, implemented responsive designs.",
        color: "bg-blue-500",
    },
    {
        title: "Intern at NSIC Academy",
        date: "2022",
        description: "Learned the fundamentals of AI in Embedded Systems.",
        color: "bg-purple-500",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="min-h-[70vh] flex items-center py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-100 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 md:mt-8 md:mb-16 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Experience
            </motion.h2>
            <div className="relative max-w-5xl mx-auto">
                <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 flex flex-col md:flex-row items-start"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
                        >
                            <div className="flex-shrink-0 -ml-9 md:-ml-9 mb-4 md:mb-0">
                                <motion.div
                                    className={`w-4 h-4 rounded-full ${exp.color}`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            </div>
                            <div className="max-w-7xl ml-0 md:ml-8 mt-0 md:mt-8 bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform transform hover:-translate-y-2">
                                <h3 className="text-md sm:text-lg font-bold mb-2">{exp.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{exp.description}</p>
                            </div>
                            <div className="absolute left-0 ml-4 text-xs sm:text-sm text-gray-500 mt-2 md:mt-0">
                                {exp.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    
    );
};