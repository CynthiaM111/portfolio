'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 font-sans">
            <motion.h1
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h1>

            <motion.section
                className="mb-10 space-y-4 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold text-blue-400">Background</h2>
                <p>
                    I&apos;m originally from Gakenke, Rwanda, moved to the United States for college.
                </p>
            </motion.section>

            <motion.section
                className="mb-10 space-y-4 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold text-blue-400">Education</h2>
                <p>
                    I&apos;m currently pursuing a degree in Information Science at Cornell University. I&apos;m expected to graduate in Spring 2026.
                </p>
            </motion.section>

            <motion.section
                className="mb-10 space-y-4 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold text-blue-400">Hobbies & Interests</h2>
                <p>
                    When I&apos;m not coding, I enjoy reading philosophy and tech blogs, jogging, and exploring new music. These activities keep me balanced and inspired.
                </p>
            </motion.section>

            <motion.section
                className="mb-10 space-y-4 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold text-blue-400">Why I Code</h2>
                <p>
                    I&apos;m passionate about building solutions that make everyday life easier and more connected. Coding allows me to bring ideas to life and continuously learn.
                </p>
            </motion.section>
        </main>
    );
}
