import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    link: string
    technologies: string[]
}

export default function ProjectCard({
    title,
    description,
    image,
    link,
    technologies
}: ProjectCardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <Link
                    href={link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    Learn More →
                </Link>
            </div>
        </div>
    )
}