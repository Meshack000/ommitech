import { useEffect, useState } from "react"
import heroPhoneComposition from "../assets/images/hero-phone-composition.png"

const heroMessages = [
    "We build digital.",
    "We teach web development.",
    "We teach UI/UX design.",
]

export default function Hero() {
    const [messageIndex, setMessageIndex] = useState(0)

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setMessageIndex((currentIndex) => (currentIndex + 1) % heroMessages.length)
        }, 6000)

        return () => window.clearInterval(intervalId)
    }, [])

    return (
        <section className="bg-white text-[#0a0f1e] px-6 md:px-16 lg:px-24 xl:px-32 pt-8 md:pt-12 pb-12 md:pb-16 font-geist selection:bg-[#2dd4bf]/20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14 items-center">

                {/* Left — Content */}
                <div className="flex flex-col items-center text-center lg:-translate-y-8 lg:items-start lg:text-left">
                    <p className="hero-slide-in font-mono text-[10px] uppercase tracking-[0.4em] text-[#2dd4bf] font-bold mb-6">
                        Digital solutions · Practical training
                    </p>

                    <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tighter md:text-6xl">
                        <span className="block min-h-[2.1em]">
                            <span
                                key={messageIndex}
                                className="hero-slide-in block text-balance"
                                aria-live="polite"
                            >
                                {heroMessages[messageIndex]}
                            </span>
                        </span>
                        <span className="hero-slide-in mt-2 block text-[#2dd4bf]" style={{ animationDelay: "850ms" }}>
                            You grow with us.
                        </span>
                    </h1>

                    <p className="hero-slide-in mt-6 max-w-[480px] text-base leading-relaxed text-[#0a0f1e]/60 md:text-lg" style={{ animationDelay: "1350ms" }}>
                        Web, design, and practical tech training.
                    </p>

                    <div className="hero-slide-in mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center" style={{ animationDelay: "1850ms" }}>
                        <a
                            href="/#services"
                            className="inline-flex items-center justify-center bg-[#0a0f1e] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#2dd4bf] hover:text-[#0a0f1e] transition-colors duration-300"
                        >
                            Explore services
                        </a>
                        <a
                            href="/#training"
                            className="inline-flex items-center justify-center border border-[#0a0f1e]/20 text-[#0a0f1e] text-xs font-bold uppercase tracking-widest px-8 py-4 hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-colors duration-300"
                        >
                            Explore training
                        </a>
                    </div>

                </div>

                {/* Right — Single phone visual */}
                <div className="flex justify-center lg:justify-end lg:-mr-12 xl:-mr-24">
                    <img
                        src={heroPhoneComposition}
                        alt="Phone mockup with floating social media and audience cards"
                        className="w-full max-w-[500px] h-auto object-contain lg:max-w-[620px] xl:max-w-[740px]"
                    />
                </div>

            </div>
        </section>
    );
}