'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Corner",
        description:
            "A learning management system built to streamline academic engagement and coursework tracking. Built with React, MongoDB, Tailwind, Node.js, Express, and Socket.io.",
        link: "/projects/corner",
        tech: ["React", "MongoDB", "Tailwind", "Node.js", "Express", "Socket.io"],
    },
    {
        title: "WeShare",
        description:
            "A mobile-first platform for public transportation in Rwanda, helping commuters share rides and plan routes efficiently. Built with React Native and Expo.",
        link: "/projects/weshare",
        tech: ["React Native", "Expo", "MongoDB", "JWT"],
    },
    // Add more projects here
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function ProjectsPage() {
    return (
        <motion.div
            className="max-w-6xl mx-auto px-6 py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={project.link}
                            className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Learn More →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
