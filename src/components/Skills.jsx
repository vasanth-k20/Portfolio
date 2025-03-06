import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiDotnet, SiMysql } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { TbSql } from "react-icons/tb";

const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 w-12 h-12" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 w-12 h-12" /> },
    { name: 'ReactJS', icon: <FaReact className="text-blue-400 w-12 h-12" /> },
    { name: 'C#', icon: <TbBrandCSharp className="text-purple-500 w-12 h-12" /> },
    { name: 'ASP.NET Core', icon: <SiDotnet className="text-indigo-500 w-12 h-12" /> },
    { name: 'Azure DevOps', icon: <VscAzureDevops className="text-blue-600 w-12 h-12" /> },
    { name: 'SQL', icon: <TbSql className="text-blue-700 w-12 h-12" /> },
];

export const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-[50vh] items-center py-16 px-6 md:px-12 lg:px-24 mb-0 flex flex-col justify-center text-center"
        >
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-12 md:mt-8 md:mb-16 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-8xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                    >
                        <div className="mb-4">{skill.icon}</div>
                        <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
