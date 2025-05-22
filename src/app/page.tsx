// app/page.tsx
"use client"
import { motion } from "framer-motion";
import Link from "next/link";


const projects = [
  {
    title: 'Corner',
    description: 'A modern LMS web app for organizing coursework and managing assignments. Built with React, MongoDB, Tailwind, Node.js, Express, Next.js, and socket.io.',
    href: '/projects/corner',
  },
  {
    title: 'WeShare',
    description: 'A React Native app to improve public transportation in Rwanda. Built with React Native, MongoDB, Node.js, Express, and Redis.',
    href: '/projects/weshare',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans">
      <motion.h1
        className="text-5xl font-bold mb-10 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hey, I'm <span className="text-blue-400">Cynthia!</span>
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-16 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm a full-stack developer passionate about mobile and web development. I build accessible, performance-first products with purpose.
      </motion.p>

      {/* Vision & Belief Section */}
      <motion.section
        className="mb-20 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-2">🌍 Vision & Belief</h2>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          I believe that technology is most impactful when it’s accessible, thoughtful, and rooted in real-world needs.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          Whether it’s helping a student stay on top of coursework or making public transportation more efficient, I strive to build tools that actually improve lives.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          My focus on simplicity, usability, and empathy drives me to create digital experiences that feel intuitive and empowering.
        </p>
      </motion.section>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <Link href={project.href} className="text-blue-600 dark:text-blue-400 underline">
              Learn more →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
