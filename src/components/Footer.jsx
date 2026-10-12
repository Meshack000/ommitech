import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="contact" className="scroll-mt-24 bg-[#0a0f1e] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
                <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
                    <div>
                        <Link to="/" className="mb-5 inline-flex items-center gap-3 transition-opacity hover:opacity-80">
                            <img src="/Logo/logo.svg" alt="Ommitech" className="h-8 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="max-w-sm text-sm leading-7 text-white/60">
                            We build practical digital solutions and teach the skills behind them—from web development to UI/UX design.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</h2>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link to="/" className="transition-colors hover:text-[#2dd4bf]">Home</Link></li>
                            <li><a href="/#services" className="transition-colors hover:text-[#2dd4bf]">Services</a></li>
                            <li><Link to="/about" className="transition-colors hover:text-[#2dd4bf]">About us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">What we do</h2>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><a href="/#services" className="transition-colors hover:text-[#2dd4bf]">Web development</a></li>
                            <li><a href="/#services" className="transition-colors hover:text-[#2dd4bf]">UI/UX design</a></li>
                            <li><a href="/#training" className="transition-colors hover:text-[#2dd4bf]">Training & mentorship</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Location</h2>
                        <p className="text-sm leading-7 text-white/60">
                            Kumasi, Ghana
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/60">
                            Building digital solutions and skills from Kumasi.
                        </p>
                        <a
                            href="https://www.instagram.com/ommitech_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-sm text-white/60 transition-colors hover:text-[#2dd4bf]"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ommitech/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-sm text-white/60 transition-colors hover:text-[#2dd4bf]"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Ommitech. All rights reserved.</p>
                    <p>Built with purpose in Kumasi, Ghana.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
