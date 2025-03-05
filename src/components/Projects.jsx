import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Income and Expense Management System",
        gif: "/IEMS.gif",
        description: "The Income and Expense Management System built with ASP.NET MVC lets users track, categorize, and manage income and expenses, providing reports and insights for better financial planning and control.",
        github: "https://github.com/vasanth-k20/Income-and-Expense-Management-System-Using-ASP.NET-MVC..git",
    },
    {
        title: "Conference Website",
        gif: "/ICCSI.gif",
        description: "The Conference Website built with ASP.NET MVC enables users to view event details, register, and manage schedules. It offers an organized platform for participants and administrators to streamline conference management efficiently.",
        github: "https://github.com/vasanth-k20/InternationalConferenceWebsite.git",
    },
    {
        title: "Employee's Login System",
        gif: "/crm.gif",
        description: "The Employee's Login System developed with ASP.NET Web API and HTML, CSS, JS enables employees to securely log in, track work hours, and view attendance, providing efficient user authentication and data management.",
        github: "https://github.com/vasanth-k20/EmployeeLoginSystem_Front-End.git",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="min-h-[70vh] flex items-center py-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
            <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-12 md:mt-8 md:mb-16 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Projects
                </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg overflow-hidden relative transition-transform transform hover:-translate-y-2"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.gif}
                                    alt={`${project.title} GIF`}
                                    className="w-full h-52 object-cover transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6 mt-8 text-white">
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-lg mb-6">{project.description}</p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 right-4 text-white hover:text-amber-400 transition-colors"
                                >
                                    <Github size={28} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
