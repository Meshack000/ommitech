import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="contact" className="scroll-mt-24 bg-[#0a0f1e] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
                <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1fr] lg:gap-10">
                    <div>
                        <Link to="/" className="mb-5 inline-flex items-center gap-3 transition-opacity hover:opacity-80">
                            <img src="/Logo/logo.svg" alt="Ommitech" className="h-8 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="max-w-sm text-sm leading-7 text-white/60">
                            Ommitech is a digital studio in Kumasi. We build websites, design brands and interfaces, and teach web development and UI/UX.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</h2>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link to="/" className="transition-colors hover:text-[#2dd4bf]">Home</Link></li>
                            <li><Link to="/services" className="transition-colors hover:text-[#2dd4bf]">Services</Link></li>
                            <li><Link to="/about" className="transition-colors hover:text-[#2dd4bf]">About us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">What we do</h2>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link to="/services" className="transition-colors hover:text-[#2dd4bf]">Web development</Link></li>
                            <li><Link to="/services" className="transition-colors hover:text-[#2dd4bf]">UI/UX design</Link></li>
                            <li><Link to="/services" className="transition-colors hover:text-[#2dd4bf]">Photoshop designing</Link></li>
                            <li><a href="/#training" className="transition-colors hover:text-[#2dd4bf]">Training & mentorship</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Location</h2>
                        <p className="text-sm leading-7 text-white/60">
                            Kumasi, Ghana
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/60">
                            Local perspective. Work for the web.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</h2>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><a href="mailto:hello@ommitech.co" className="transition-colors hover:text-[#2dd4bf]">hello@ommitech.co</a></li>
                            <li><a href="tel:+233509266651" className="transition-colors hover:text-[#2dd4bf]">0509 266 651</a></li>
                            <li><a href="tel:+233240221242" className="transition-colors hover:text-[#2dd4bf]">0240 221 242</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Follow us</h2>
                        <div className="flex items-center gap-4 text-white/60">
                            <a
                                href="https://www.instagram.com/ommitech_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ommitech on Instagram"
                                className="transition-colors hover:text-[#2dd4bf]"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="0.8" className="fill-current stroke-none" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/ommitech/?viewAsMember=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ommitech on LinkedIn"
                                className="transition-colors hover:text-[#2dd4bf]"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Ommitech. All rights reserved.</p>
                    <p>Ommitech · Kumasi, Ghana</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
