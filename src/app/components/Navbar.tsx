// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center h-30">
                    <img
                        src="/logo.png"
                        alt="Cynthia M. Logo"
                        width={300}
                        height={150}
                        className="object-contain h-30 w-auto"
                        
                    />
                </Link>

                {/* Desktop menu */}
                <nav className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
                    <Link href="/" className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">Home</Link>
                    <Link href="/projects" className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">Projects</Link>
                    <Link href="/about" className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">About</Link>
                    <Link href="/contact" className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">Contact</Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-gray-800 dark:text-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
                    <Link href="/" onClick={() => setIsOpen(false)} className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">Home</Link>
                    <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">Projects</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">About</Link>

                    <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md transition-colors">Contact</Link>
                </nav>
            )}
        </header>
    );
}
