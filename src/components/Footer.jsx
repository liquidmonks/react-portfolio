import React from 'react'

export default function Footer() {
    return (
        // Render footer component with background color and padding.
        <footer className="bg-[#454e56] p-4 lg:py-6">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                // Render company name as a non-selectable text element.
                <span className="select-none font-semibold text-lg lg:text-xl tracking-tight text-orange-500">Liquid Monks</span>
                <div className="flex space-x-3 text-lg">
                    // Render link to GitHub profile.
                    <a href="https://github.com/" target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-github text-orange-500 hover:text-orange-300 duration-300"></i>
                    </a>
                    // Render link to LinkedIn profile.
                    <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-linkedin text-orange-500 hover:text-orange-300 duration-300"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
