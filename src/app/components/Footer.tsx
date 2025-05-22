// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm py-6 mt-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p>© {new Date().getFullYear()} Cynthia Mujyambere. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="https://github.com/CynthiaM111" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/cynthia-mujyambere-26956a233/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        LinkedIn
                    </a>
                    <a href="mailto:mbutocy@gmail.com" className="hover:text-blue-500">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
