import { Link } from 'react-router-dom'
import vantaSplash from '../assets/images/vanta 1.png'
import vantaScreens from '../assets/images/vanta 2.png'
import vantaShowcase from '../assets/images/vanta 3.png'

const screens = [
    {
        src: vantaSplash,
        alt: 'Vanta app welcome screen and premium car rental homepage'
    },
    {
        src: vantaScreens,
        alt: 'Vanta mobile app vehicle search, details, and booking screens'
    }
]

export default function VantaPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] font-geist text-white">
            <section className="px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-24">
                <div className="mx-auto max-w-7xl">
                    <Link
                        to="/#work"
                        className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[#d4ff36]"
                    >
                        <span aria-hidden="true">←</span> Selected work
                    </Link>

                    <div className="grid gap-10 pb-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:pb-16">
                        <div>
                            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4ff36]">
                                UI/UX Design · Mobile app concept
                            </p>
                            <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tighter md:text-7xl">
                                Vanta Car Rental App
                            </h1>
                        </div>
                        <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
                            A premium car-rental experience designed to make discovering a car, comparing details, and booking a ride feel effortless.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                        <img
                            src={vantaShowcase}
                            alt="Vanta premium car rental app design showcase"
                            width="1600"
                            height="2000"
                            fetchPriority="high"
                            decoding="async"
                            className="mx-auto max-h-[85vh] w-full object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="border-t border-white/10 px-6 py-16 md:px-12 md:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
                    <div>
                        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4ff36]">
                            The experience
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            From first look to confirmed booking.
                        </h2>
                    </div>
                    <div className="max-w-2xl space-y-5 text-sm leading-7 text-white/60 md:text-base">
                        <p>
                            Vanta is a mobile app concept for premium car rentals. The visual system pairs a dark interface with vivid lime accents to keep the cars and key actions in focus.
                        </p>
                        <p>
                            The screens bring together vehicle discovery, clear car details, rental dates, optional extras, and a straightforward booking summary.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:mt-20 md:grid-cols-2">
                    {screens.map((screen) => (
                        <figure key={screen.src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                            <img
                                src={screen.src}
                                alt={screen.alt}
                                loading="lazy"
                                decoding="async"
                                className="h-full max-h-[780px] w-full object-contain"
                            />
                        </figure>
                    ))}
                </div>
            </section>

            <section className="border-t border-white/10 px-6 py-16 md:px-12 md:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4ff36]">
                            Have a product in mind?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                            Let’s design its next step.
                        </h2>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-[#d4ff36] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#0a0a0a] transition-colors hover:bg-white"
                    >
                        Start a conversation <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>
        </main>
    )
}
