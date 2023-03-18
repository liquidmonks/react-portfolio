import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Navbar() {
    const [open, setOpen] = useState(false) // Set initial state of the navbar to closed
    const [active, setActive] = useState('home') // Set initial active link to 'home'
    const isDesk = useMediaQuery({
        query: '(min-width: 768px)' // Check if screen width is more than 768px
    })

    return (
        <nav className="sticky top-0 left-0 w-full z-10 bg-[#454e56] p-4 lg:p-6">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <span className="font-semibold text-lg lg:text-xl tracking-tight text-orange-500">Liquid Monks</span>
                <div className="block md:hidden">
                    <button onClick={() => setOpen(prev => !prev)} className="flex items-center px-3 py-2 border rounded hover:border-white">
                        <i className="fa fa-bars text-orange-500 border-orange-500"></i>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center md:w-auto duration-200 overflow-hidden ${isDesk ? '' : open ? 'h-[200px]' : 'h-0'}`}>
                    <div className="text-sm lg:flex-grow">
                        <ul className="nav-items ml-auto text-left md:text-right">
                            {
                                links.map(l => (
                                    <li key={l.name} onClick={() => setActive(l.name)}>
                                        <a href={l.link} id="main-search-link" className={active === l.name ? 'active-link' : ''}>{l.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}


const links = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'about',
        link: '#about'
    },
    {
        name: 'projects',
        link: '#projects'
    },
    {
        name: 'services',
        link: '#services'
    },
    {
        name: 'news',
        link: '#news'
    },
    {
        name: 'contact',
        link: '#contact'
    },
]
