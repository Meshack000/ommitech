import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#0a0f1e]/10 bg-white/95 text-[#0a0f1e] backdrop-blur">
            <div className="relative flex h-[72px] items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <img className="w-9 md:w-11" src={logo} alt="" />
                    <span className="text-lg font-black tracking-tight md:text-xl">Ommitech</span>
                </Link>

                <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
                    <li><Link to="/" className="transition-colors hover:text-[#14b8a6]">Home</Link></li>
                    <li><a href="/#services" className="transition-colors hover:text-[#14b8a6]">Services</a></li>
                    <li><a href="/#training" className="transition-colors hover:text-[#14b8a6]">Training</a></li>
                    <li><Link to="/about" className="transition-colors hover:text-[#14b8a6]">About</Link></li>
                </ul>

                <a
                    href="/#contact"
                    className="hidden rounded-md bg-[#0a0f1e] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1e] md:inline-flex"
                >
                    Get in touch
                </a>

                <button
                    type="button"
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors hover:bg-[#0a0f1e]/5 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    <span className={`block h-0.5 w-5 bg-[#0a0f1e] transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-5 bg-[#0a0f1e] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-5 bg-[#0a0f1e] transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>

                {isOpen && (
                    <div id="mobile-navigation" className="absolute left-0 top-[72px] w-full border-b border-[#0a0f1e]/10 bg-white p-6 shadow-lg md:hidden">
                        <ul className="flex flex-col gap-5 text-base font-medium">
                            <li><Link to="/" onClick={closeMenu} className="block transition-colors hover:text-[#14b8a6]">Home</Link></li>
                            <li><a href="/#services" onClick={closeMenu} className="block transition-colors hover:text-[#14b8a6]">Services</a></li>
                            <li><a href="/#training" onClick={closeMenu} className="block transition-colors hover:text-[#14b8a6]">Training</a></li>
                            <li><Link to="/about" onClick={closeMenu} className="block transition-colors hover:text-[#14b8a6]">About</Link></li>
                            <li>
                                <a
                                    href="/#contact"
                                    onClick={closeMenu}
                                    className="inline-flex rounded-md bg-[#0a0f1e] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1e]"
                                >
                                    Get in touch
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
