import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const contactDetails = [
    {
        label: 'Email us',
        value: 'hello@ommitech.co',
        href: 'mailto:hello@ommitech.co',
        Icon: Mail,
    },
    {
        label: 'Call us',
        value: '0509 266 651',
        href: 'tel:+233509266651',
        Icon: Phone,
    },
    {
        label: 'WhatsApp',
        value: 'Chat with our team',
        href: 'https://wa.me/233509266651',
        Icon: MessageCircle,
    },
]

function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const topic = formData.get('topic').trim()
    const message = formData.get('message').trim()
    const body = [
        'Hi Ommitech,',
        '',
        message,
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        ...(topic ? [`I'm interested in: ${topic}`] : []),
    ].join('\n')

    window.location.href = `mailto:hello@ommitech.co?subject=${encodeURIComponent(`Website enquiry from ${name}`)}&body=${encodeURIComponent(body)}`
}

export default function ContactPage() {
    return (
        <main className="bg-[#f7f8f7] font-geist text-[#0a0f1e] selection:bg-[#2dd4bf]/20">
            <section className="relative overflow-hidden bg-[#0a0f1e] px-6 py-20 text-white md:px-12 md:py-28">
                <div aria-hidden="true" className="absolute -right-24 -top-40 h-96 w-96 rounded-full bg-[#2dd4bf]/15 blur-3xl" />
                <div className="relative mx-auto max-w-7xl">
                    <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                        Contact Ommitech · Kumasi, Ghana
                    </p>
                    <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                            Let’s make your next idea happen.
                        </h1>
                        <p className="max-w-lg text-base leading-7 text-white/65 md:justify-self-end md:text-lg">
                            Tell us what you’re planning, ask us a question, or just say hello. We’d love to hear from you.
                        </p>
                    </div>
                    <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                        <span className="h-2 w-2 rounded-full bg-[#2dd4bf]" />
                        Web · Design · Training · Partnerships
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-12 md:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <div>
                        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#11998e]">
                            Reach out directly
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">We’re easy to reach.</h2>
                        <p className="mt-4 max-w-lg text-sm leading-6 text-[#0a0f1e]/60">
                            Choose whatever works best for you. For a quick conversation, WhatsApp or a call is a great place to start.
                        </p>

                        <div className="mt-9 space-y-3">
                            {contactDetails.map((detail) => (
                                <a
                                    key={detail.label}
                                    href={detail.href}
                                    className="group flex items-center gap-4 border border-[#0a0f1e]/10 bg-white p-4 transition-colors hover:border-[#11998e]"
                                    target={detail.href.startsWith('https://') ? '_blank' : undefined}
                                    rel={detail.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#e9f7f4] text-[#11998e]">
                                        <detail.Icon size={19} aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0a0f1e]/45">{detail.label}</span>
                                        <span className="mt-1 block truncate text-sm font-semibold">{detail.value}</span>
                                    </span>
                                    <ArrowUpRight size={17} className="text-[#0a0f1e]/35 transition-colors group-hover:text-[#11998e]" aria-hidden="true" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-5 border-t border-[#0a0f1e]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-3">
                                <MapPin size={19} className="mt-0.5 shrink-0 text-[#11998e]" aria-hidden="true" />
                                <div>
                                    <p className="text-sm font-semibold">Kumasi, Ghana</p>
                                    <p className="mt-1 text-xs text-[#0a0f1e]/50">Proudly based in Kumasi</p>
                                </div>
                            </div>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Kumasi%2C%20Ghana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#11998e] transition-colors hover:text-[#0a0f1e]"
                            >
                                Open map <ArrowUpRight size={15} aria-hidden="true" />
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <span className="mr-1 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0a0f1e]/45">Follow along</span>
                            <a
                                href="https://www.instagram.com/ommitech_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ommitech on Instagram"
                                className="flex h-10 w-10 items-center justify-center border border-[#0a0f1e]/10 bg-white transition-colors hover:border-[#11998e] hover:text-[#11998e]"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                                className="flex h-10 w-10 items-center justify-center border border-[#0a0f1e]/10 bg-white transition-colors hover:border-[#11998e] hover:text-[#11998e]"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <section className="bg-white p-6 shadow-[0_20px_60px_rgba(10,15,30,0.06)] sm:p-9">
                        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#11998e]">Send a message</p>
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What can we help you with?</h2>
                        <p className="mt-3 text-sm leading-6 text-[#0a0f1e]/60">
                            Share a few details and your email app will open with a message ready to send.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Your name</label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="w-full border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Email address</label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-topic" className="mb-2 block text-sm font-semibold">
                                    What’s this about? <span className="font-normal text-[#0a0f1e]/45">(optional)</span>
                                </label>
                                <select
                                    id="contact-topic"
                                    name="topic"
                                    defaultValue=""
                                    className="w-full border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                >
                                    <option value="">Choose a topic</option>
                                    <option value="Website development">Website development</option>
                                    <option value="UI/UX or brand design">UI/UX or brand design</option>
                                    <option value="Training and mentorship">Training and mentorship</option>
                                    <option value="Something else">Something else</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Your message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full resize-y border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-3 bg-[#0a0f1e] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1e] sm:w-auto"
                            >
                                Continue in email <ArrowUpRight size={16} aria-hidden="true" />
                            </button>
                        </form>

                        <p className="mt-5 text-xs leading-5 text-[#0a0f1e]/50">
                            Prefer to email us directly? <a href="mailto:hello@ommitech.co" className="font-semibold text-[#11998e] underline underline-offset-2">hello@ommitech.co</a>
                        </p>
                    </section>
                </div>
            </section>
        </main>
    )
}
