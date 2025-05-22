// app/projects/weshare/page.tsx
import Link from "next/link";

export default function WeShareProjectPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">WeShare – Public Transport Solution for Rwanda</h1>
            
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Problem</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    In Rwanda, over 70% of the population relies on public buses for daily transportation. The current system lacks proper scheduling infrastructure, leading to uncertainty and chaos at bus stations, particularly during peak hours and holiday seasons when stations are most congested.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Solution</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    WeShare is a comprehensive transportation platform with two main interfaces:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                    <li>A React Native mobile application for commuters to access real-time bus tracking and scheduling information</li>
                    <li>A web-based dashboard for transportation agencies to manage their fleet, routes, schedules, and monitor analytics</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>React Native (Expo)</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB</li>
                    <li>JWT Authentication</li>
                    <li>Google Maps API</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Map-based route tracking & discovery</li>
                    <li>Real-time bus location updates</li>
                    <li>Schedule lookup and notifications</li>
                    <li>Secure user authentication</li>
                    <li>Optimized for low-data usage environments</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Status</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Currently under development, building a robust system with real-time updates and user-friendly interface to serve Rwanda's transportation needs.
                </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
                <h2 className="text-xl font-semibold">Project Repositories</h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://github.com/CynthiaM111/weshare/tree/goal/weshare-client/weshare-client"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        Mobile Frontend Code →
                    </a>
                    <a
                        href="https://github.com/CynthiaM111/weshare/tree/goal/agencyboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        Agency Dashboard Frontend →
                    </a>
                    <a
                        href="https://github.com/CynthiaM111/weshare/tree/goal/weshare-server"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        Backend(For both mobile and agency dashboard) →
                    </a>
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
