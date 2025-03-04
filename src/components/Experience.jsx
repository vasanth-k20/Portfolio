import React from 'react'
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Junior Software Developer | Brain Insight, Vellore, TamilNadu",
        date: "Nov 2024 – Present",
        description: [
            "Developed and Enhanced Web Applications: Worked with ASP.NET MVC to build and update web applications, organizing HTML in Views and managing CSS and JavaScript in the wwwroot folder.",
            "Backend Development: Improved existing modules like EmployeeLoginDetails by fixing issues and adding new functionalities, such as calculating login times, including break durations, and ensuring accurate data storage.",
            "Azure DevOps: Started learning and applying Azure DevOps principles, focusing on managing work items, sprints, and backlogs effectively.",
            "Collaborative Projects: Contributed to the development of a conference website, including the addition of a client page.",
            "Problem Solving: Tackled and resolved backend issues, ensuring smooth application performance and user experience."
        ],
        color: "bg-purple-500",
    },
    {
        title: "Software Developer Intern | Brain Insight, Vellore, TamilNadu",
        date: "Sep 2024 - Nov 2024",
        description: [
            "Impressive Performance: Completed a 3-month internship and was onboarded as a full-time employee based on exceptional performance and contributions.",
            "Backend Support: Contributed to backend tasks such as debugging and enhancing functionalities for existing modules.",
            "Learning and Collaboration: Gained hands-on experience with real-world projects, collaborating with senior developers to improve code quality and efficiency.",
            "Skill Development: Improved skills in C# and ASP.NET through practical tasks and feedback from the team."
        ],
        color: "bg-blue-500",
    },
    // {
    //     title: "Intern at NSIC Academy",
    //     date: "2022",
    //     description: "Learned the fundamentals of AI in Embedded Systems.",
    //     color: "bg-purple-500",
    // },
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
                    <div className="pl-4 sm:pl-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="mb-12 flex flex-col md:flex-row items-start"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
                            >
                                <div className="flex-shrink-0 -ml-9 md:-ml-9 mt-1 mb-4 md:mb-0">
                                    <motion.div
                                        className={`w-4 h-4 rounded-full ${exp.color}`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    ></motion.div>
                                </div>
                                <div className="max-w-7xl ml-0 md:ml-8 mt-0 md:mt-10 bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform transform hover:-translate-y-2">
                                    <h3 className="text-lg md:text-2xl font-semibold mb-2">{exp.title}</h3>
                                    <ul className="list-disc list-inside text-lg md:text-xl text-justify">
                                        {exp.description.map((point, idx) => (
                                            <li key={idx} className="mb-1">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="absolute left-0 ml-4 text-xs md:text-xl text-black-500 mt-2 md:mt-0">
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
