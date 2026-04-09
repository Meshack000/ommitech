import React, { useState } from 'react'
import logo from "../assets/images/logo.png"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="text-sm text-white w-full">
            <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900">

                {/* Logo */}
                <div className="flex items-center gap-1">
                    <img className="w-9 md:w-12" src={logo} alt="Ommitech logo" />
                    <h1 className="text-lg md:text-2xl font-black">Ommitech</h1>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-8 md:pl-28">
                    <li><a href="#" className="border-b-2 border-transparent hover:border-cyan-500 transition-colors duration-300">Solutions</a></li>
                    <li><a href="#" className="border-b-2 border-transparent hover:border-cyan-500 transition-colors duration-300">Case Studies</a></li>
                    <li><a href="#" className="border-b-2 border-transparent hover:border-cyan-500 transition-colors duration-300">Company</a></li>
                    <li><a href="#" className="border-b-2 border-transparent hover:border-cyan-500 transition-colors duration-300">Works</a></li>
                    <li><a href="#" className="border-b-2 border-transparent hover:border-cyan-500 transition-colors duration-300">Pricing</a></li>
                </ul>

                {/* Desktop CTA */}
                <button className="hidden md:inline text-cyan-600 border border-cyan-500 hover:bg-cyan-500 hover:text-black transition-colors duration-600 px-5 py-2 rounded-lg font-bold">
                    Get In Touch
                </button>

                {/* Burger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-[70px] left-0 w-full bg-white shadow-md p-6 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <ul className="flex flex-col space-y-4 text-lg text-gray-900">
                        <li><a href="#" onClick={() => setIsOpen(false)}>Solutions</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Case Studies</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Company</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Works</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Pricing</a></li>
                    </ul>
                    <button className="mt-6 text-cyan-600 border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors duration-100 w-40 h-11 rounded-lg font-bold">
                        Get In Touch
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar