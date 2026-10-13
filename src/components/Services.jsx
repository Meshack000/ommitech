import { Link } from 'react-router-dom';

const services = [
    {
        number: '01',
        title: 'Web Development',
        description: 'Responsive, reliable websites and web applications built around your goals and your customers.',
        details: [
            'Business and landing pages',
            'Responsive frontend development',
            'Website updates and improvements'
        ],
        note: 'For businesses ready to build or improve their digital presence.'
    },
    {
        number: '02',
        title: 'UI/UX Design',
        description: 'Thoughtful user journeys and polished interfaces that make digital products clear and easy to use.',
        details: [
            'User flows and information structure',
            'Wireframes and interface design',
            'Interactive product prototypes'
        ],
        note: 'For teams shaping a new product or refining an existing experience.'
    },
    {
        number: '03',
        title: 'Brand Identity',
        description: 'Distinctive visual identities that help businesses communicate consistently and stand out.',
        details: [
            'Visual direction and identity',
            'Logo and color system',
            'Typography and brand assets'
        ],
        note: 'For growing businesses looking for a clear, cohesive brand.'
    },
    {
        number: '04',
        title: 'Photoshop Designing',
        description: 'Custom graphics and polished visual assets designed in Photoshop to help your brand communicate clearly and stand out.',
        details: [
            'Social media graphics',
            'Promotional flyers and posters',
            'Photo editing and visual compositions'
        ],
        note: 'For businesses and creators who need eye-catching, custom visuals.'
    },
    {
        number: '05',
        title: 'Training & Mentorship',
        description: 'Practical guidance for aspiring creators learning web development and UI/UX design through hands-on projects.',
        details: [
            'Web development fundamentals',
            'UI/UX design practice',
            'Project-based learning and mentorship'
        ],
        note: 'For learners who want to build skills by creating real work.'
    }
];

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'We listen, understand your goals, and agree on what success should look like.'
    },
    {
        number: '02',
        title: 'Plan & create',
        description: 'We shape the right approach, then design and build around your needs.'
    },
    {
        number: '03',
        title: 'Launch & grow',
        description: 'We help you put the work into practice and move forward with confidence.'
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-geist text-[#0a0f1e] selection:bg-[#2dd4bf]/20">
            <section className="bg-[#f6f7f5] px-6 py-20 md:px-12 md:py-28">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#11998e]">
                        // What we do
                    </p>
                    <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                            Digital work built around <span className="text-[#0a0f1e]/35">real goals.</span>
                        </h1>
                        <div className="max-w-lg md:justify-self-end">
                            <p className="text-base leading-7 text-[#0a0f1e]/65 md:text-lg">
                                From websites and product experiences to brand identities, custom Photoshop designs, and practical training, we help people turn ideas into useful digital work.
                            </p>
                            <a
                                href="#service-list"
                                className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0a0f1e] transition-colors hover:text-[#11998e]"
                            >
                                Explore our services <span aria-hidden="true" className="text-[#11998e]">↓</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-14 h-px w-full bg-[#0a0f1e]/10 md:mt-20" />
                    <div className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-[#0a0f1e]/40">
                        <span>Design / Build / Grow</span>
                        <span>Kumasi, Ghana</span>
                    </div>
                </div>
            </section>

            <section id="service-list" className="scroll-mt-32 px-6 py-20 md:px-12 md:py-28">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-12 max-w-2xl">
                        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#11998e]">
                            // Services
                        </p>
                        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                            The right support for your next step.
                        </h2>
                    </header>

                    <div className="grid gap-4 lg:grid-cols-3">
                        {services.map((service) => (
                            <article
                                key={service.number}
                                className="flex min-h-full flex-col border border-[#0a0f1e]/10 p-7 transition-colors duration-300 hover:border-[#2dd4bf] sm:p-9"
                            >
                                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#11998e]">
                                    {service.number}
                                </span>
                                <h3 className="mt-10 text-2xl font-bold tracking-tight sm:text-3xl">
                                    {service.title}
                                </h3>
                                <p className="mt-4 min-h-20 text-sm leading-6 text-[#0a0f1e]/60">
                                    {service.description}
                                </p>
                                <ul className="mt-7 space-y-3 border-t border-[#0a0f1e]/10 pt-6 text-sm text-[#0a0f1e]/75">
                                    {service.details.map((detail) => (
                                        <li key={detail} className="flex gap-3">
                                            <span aria-hidden="true" className="text-[#11998e]">—</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-auto pt-8 text-xs leading-5 text-[#0a0f1e]/45">
                                    {service.note}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0a0f1e] px-6 py-20 text-white md:px-12 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
                        <div>
                            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                                // How we work
                            </p>
                            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                A clear path from idea to outcome.
                            </h2>
                            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                                Every project starts with understanding what you need, then finding a practical way to make it happen.
                            </p>
                        </div>
                        <div className="divide-y divide-white/15 border-y border-white/15">
                            {steps.map((step) => (
                                <article key={step.number} className="grid gap-3 py-6 sm:grid-cols-[56px_1fr] sm:gap-5">
                                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#2dd4bf]">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/60">{step.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-12 md:py-24">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 border border-[#0a0f1e]/10 p-8 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
                    <div className="max-w-2xl">
                        <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#11998e]">
                            Your next step
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                            Have a project in mind?
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-[#0a0f1e]/60">
                            Tell us what you are looking to create, and we can talk through a good way to get started.
                        </p>
                    </div>
                    <Link
                        to="/#contact"
                        className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#0a0f1e] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1e]"
                    >
                        Get in touch <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
