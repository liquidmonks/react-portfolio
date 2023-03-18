// This component renders a grid of service offerings with icons, titles, and descriptions.
// The component uses the 'services' array to populate the grid, with each service defined as an object with 'title', 'icon', and 'description' properties.
// The component uses the CSS classes 'services', 'service', and 'icon' to style the grid and the individual service items.

import React from 'react'

export default function Services() {
    return (
        <div className="services py-20 px-2 lg:px-5" id="services">
            <div className="text-center mb-20"  data-aos='fade-down'>
                <h4 className="subtitle text-xl mb-5">What We Offer</h4>
                <h1 className="section-title">OUR SERVICES</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map((s, i) => (
                        <div key={i} className="w-full" data-aos='fade'>
                            <div className="service">
                                <div className="icon">
                                    <i className={s.icon}></i>
                                </div>
                                <h1>{s.title}</h1>
                                <p>{s.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

// Define the services offered, with each service represented as an object with 'title', 'icon', and 'description' properties.
const services = [
    {
        title: 'Web Development',
        icon: 'fa fa-laptop-code',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam itaque.'
    },
    {
        title: 'Web Design',
        icon: 'fa fa-mobile',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam itaque.'
    },
    {
        title: 'Mobile Design',
        icon: 'fa fa-mobile',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam itaque.'
    },
    {
        title: 'Game Development',
        icon: 'fa fa-gamepad',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam itaque.'
    },
    {
        title: 'Software Debugging',
        icon: 'fa fa-bug',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam itaque.'
    },
    {
        title: 'Tech Support',
        icon: 'fa fa-headset',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quisquam itaque.'
    },
]