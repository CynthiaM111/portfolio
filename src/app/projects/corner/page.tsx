// app/projects/corner/page.tsx
import Link from "next/link";

export default function CornerProjectPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">Corner – LMS Web App</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Corner is a lightweight Learning Management System (LMS) designed specifically for the East African education sector. With an evolving AI integration roadmap, it aims to bridge the technology gap in education across East Africa, making advanced learning tools more accessible to underserved regions.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Next.js (React)</li>
                    <li>Tailwind CSS</li>
                    <li>JWT Authentication</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Socket.io</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Student and Instructor roles with separate dashboards</li>
                    <li>Class materials/resources management and tracking</li>
                    <li>Discussion board for students to ask questions and engage with instructors</li>
                    <li>Authentication with JWT</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Future AI Roadmap</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Currently in early stages of AI integration, Corner&apos;s vision includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>AI-powered learning assistant for personalized support</li>
                    <li>Predictive learning pattern analysis</li>
                    <li>Automated content recommendations</li>
                    <li>Smart progress tracking and insights</li>
                </ul>
            </div>

            <div className="flex gap-4 mt-6">
                <a
                    href="https://github.com/CynthiaM111/corner-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                >
                    View Frontend Code →
                </a>
                <a
                    href="https://github.com/CynthiaM111/corner-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                >
                    View Backend Code →
                </a>
                <a
                    href="https://corner-lms-frontend.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                >
                    Deployment →
                </a>

                <a
                    href="https://drive.google.com/file/d/1KapPWnN8dL7PosxJyAhlvxOKbVN1T_TB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                >
                    Demo Video →
                </a>
            </div>

            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Demo Accounts</h3>
                <div className="space-y-4">
                    <div>
                        <p className="font-medium">👨‍🎓 Student Account</p>
                        <p className="text-gray-600 dark:text-gray-300">Email: cynthiamujyambere111@gmail.com</p>
                        <p className="text-gray-600 dark:text-gray-300">Password: 123456</p>
                    </div>
                    <div>
                        <p className="font-medium">👩‍🏫 Teacher Account</p>
                        <p className="text-gray-600 dark:text-gray-300">Email: mbutocy@gmail.com</p>
                        <p className="text-gray-600 dark:text-gray-300">Password: 123456</p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 underline">
                    ← Back to Projects
                </Link>
            </div>
        </div>
    );
}
