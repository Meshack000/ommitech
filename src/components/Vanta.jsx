import { Link } from 'react-router-dom'
import vantaSplash from '../assets/images/vanta 1.png'
import vantaScreens from '../assets/images/vanta 2.png'
import vantaShowcase from '../assets/images/vanta 3.png'

const screens = [
    {
        number: '01',
        title: 'The first impression',
        description: 'A focused welcome screen introduces the premium feel and gets the journey moving.',
        src: vantaSplash,
        alt: 'Vanta welcome screen and car rental app home screen'
    },
    {
        number: '02',
        title: 'The full booking journey',
        description: 'A closer look at browsing, vehicle details, and a clear booking summary.',
        src: vantaScreens,
        alt: 'Vanta app screens for finding cars, viewing vehicle details, and confirming a booking'
    }
]

const journey = [
    {
        number: '01',
        title: 'Find a ride',
        description: 'Search and browse by location or vehicle type, with useful choices visible from the start.'
    },
    {
        number: '02',
        title: 'Compare with confidence',
        description: 'Keep vehicle details, ratings, and key specifications together to make comparing feel simple.'
    },
    {
        number: '03',
        title: 'See the whole booking',
        description: 'Bring dates, optional extras, and the total together before the final confirmation.'
    }
]

export default function VantaPage() {
    return (
        <main className="min-h-screen bg-[#08090a] font-geist text-white selection:bg-[#d4ff36]/25">
            <section className="relative isolate overflow-hidden px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-14">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-40 top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#d4ff36]/10 blur-[130px]"
                />
                <div className="mx-auto max-w-7xl">
                    <Link
                        to="/#work"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-[#d4ff36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4ff36]"
                    >
                        <span aria-hidden="true">←</span> Selected work
                    </Link>

                    <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
                        <div>
                            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4ff36]">
                                UI/UX design · Mobile app concept
                            </p>
                            <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                                Vanta
                                <span className="mt-2 block text-white/45">Car rental, reimagined.</span>
                            </h1>
                            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
                                A premium car-rental app concept that makes it easier to find the right ride, understand the details, and book with confidence.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#screens"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#d4ff36] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#101108] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                >
                                    Explore the screens <span aria-hidden="true">↓</span>
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-[#d4ff36]/60 hover:text-[#d4ff36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4ff36]"
                                >
                                    Start a project <span aria-hidden="true">↗</span>
                                </Link>
                            </div>

                            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                                <div>
                                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Project</dt>
                                    <dd className="mt-2 text-xs font-medium text-white/85">Product concept</dd>
                                </div>
                                <div>
                                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Platform</dt>
                                    <dd className="mt-2 text-xs font-medium text-white/85">Mobile app</dd>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Focus</dt>
                                    <dd className="mt-2 text-xs font-medium text-white/85">Discovery to booking</dd>
                                </div>
                            </dl>
                        </div>

                        <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#101112] shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
                            <img
                                src={vantaShowcase}
                                alt="Vanta mobile app concept showing the welcome, car discovery, vehicle details, and booking screens"
                                width="2000"
                                height="909"
                                fetchPriority="high"
                                decoding="async"
                                className="h-auto w-full"
                            />
                            <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 sm:px-5">
                                <span>Vanta · Mobile experience</span>
                                <span>01 — 05</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="border-t border-white/10 px-6 py-16 md:px-12 md:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
                    <div>
                        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4ff36]">
                            The idea
                        </p>
                        <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            Make every step feel considered.
                        </h2>
                    </div>
                    <div className="max-w-2xl space-y-5 text-sm leading-7 text-white/60 md:text-base md:leading-8">
                        <p>
                            Vanta is a visual concept for a premium car-rental experience. Its dark interface and vivid lime accents keep attention on the vehicles and the next useful action.
                        </p>
                        <p>
                            The flow moves from finding a car to reviewing its details and confirming a booking, with important information grouped where people need it.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-12 grid max-w-7xl gap-3 md:mt-16 md:grid-cols-3">
                    {journey.map((step) => (
                        <article key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#d4ff36]">{step.number}</span>
                            <h3 className="mt-8 text-xl font-bold tracking-tight">{step.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-white/55">{step.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="screens" className="scroll-mt-8 border-t border-white/10 px-6 py-16 md:px-12 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-14">
                        <div>
                            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4ff36]">
                                A closer look
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">From first tap to confirmed ride.</h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-white/50">
                            A selection of screens that shape the Vanta mobile experience.
                        </p>
                    </div>

                    <div className="grid items-start gap-5 md:grid-cols-[0.85fr_1.15fr] md:gap-7">
                        {screens.map((screen) => (
                            <figure key={screen.number} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111213]">
                                <img
                                    src={screen.src}
                                    alt={screen.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-auto max-h-[780px] w-full object-contain"
                                />
                                <figcaption className="border-t border-white/10 px-5 py-5 sm:px-6">
                                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#d4ff36]">{screen.number}</span>
                                    <h3 className="mt-2 text-lg font-bold tracking-tight">{screen.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-white/50">{screen.description}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-white/10 px-6 py-16 md:px-12 md:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl border border-[#d4ff36]/20 bg-[#d4ff36]/[0.06] p-7 sm:p-10 md:flex-row md:items-center md:p-12">
                    <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4ff36]">
                            Have a product in mind?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                            Let’s design its next step.
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                            Tell us what you’re working on and we’ll help shape a clear, thoughtful digital experience.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#d4ff36] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#0a0a0a] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Start a conversation <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>
        </main>
    )
}
