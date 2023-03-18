import React from 'react'
import PlaceholderImg from '../../assets/placeholderimg.png'

// Define an array of project objects
const projects = [
    {
        title: 'Password Generator',
        description: 'Interactive Password Generator',
        imgSrc: PlaceholderImg,
        link: '/',
    },
    {
        title: 'Password Generator',
        description: 'Interactive Password Generator',
        imgSrc: PlaceholderImg,
        link: '/',
    },
    {
        title: 'Password Generator',
        description: 'Interactive Password Generator',
        imgSrc: PlaceholderImg,
        link: '/',
    },
    {
        title: 'Password Generator',
        description: 'Interactive Password Generator',
        imgSrc: PlaceholderImg,
        link: '/',
    },
];

// Define a functional component named "Projects"
export default function Projects() {
    return (
        // The root element of the component
        <div className="relative px-2 py-20 projects md:px-5" id="projects">
            <div className="mb-20 text-center" data-aos='fade-down'>
                <h4 className="mb-5 text-xl subtitle">Recent Projects</h4>
                <h1 className="section-title">OUR PORTFOLIO</h1>
            </div>

            {/* Grid layout */}
            <div className="grid gap-10 md:grid-cols-2">
                {/* First column */}
                <div className="w-full">
                    {/* Main title */}
                    <h1 className="mb-20 text-5xl font-bold title" data-aos='fade'>Portfolio</h1>

                    {/* Loop through the first half of the projects array */}
                    {projects.slice(0, projects.length / 2).map((project, index) => (
                        // Project item
                        <div className="project-item" key={index} data-aos='fade-right'>
                            <img src={project.imgSrc} alt="Project" />
                            <div className="desc">
                                <h2>{project.title}</h2>
                                <p className="my-2">{project.description}</p>
                                <div className="inline-block border-b-2 border-white">
                                    <a href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second column */}
                <div className="w-full">
                    {/* Loop through the second half of the projects array */}
                    {projects.slice(projects.length / 2).map((project, index) => (
                        // Project item
                        <div className="project-item" key={index} data-aos='fade-left'>
                            <img src={project.imgSrc} alt="Project" />
                            <div className="desc">
                                <h2>{project.title}</h2>
                                <p className="my-2">{project.description}</p>
                                <div className="inline-block border-b-2 border-white">
                                    <a href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load More button */}
            <div className="w-full text-center">
                <button className="inline-block px-2 py-4 mb-3 text-4xl font-bold text-orange-400 md:px-5">
                    Load More...
                </button>
            </div>
        </div>
    )
}
