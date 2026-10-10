import heroPhoneComposition from "../assets/images/hero-phone-composition.png"

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "3+", label: "Years Experience" },
];

export default function Hero() {
    return (
        <section className="bg-white text-[#0a0f1e] px-6 md:px-16 lg:px-24 xl:px-32 pt-16 md:pt-24 pb-24 font-geist selection:bg-[#2dd4bf]/20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14 items-center">

                {/* Left — Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#2dd4bf] font-bold mb-6">
                        // Digital Product Studio
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] max-w-xl">
                        Innovation{" "}
                        <span className="text-[#2dd4bf]">Engineered</span>{" "}
                        for the Future
                    </h1>

                    <p className="mt-6 text-base md:text-lg text-[#0a0f1e]/60 leading-relaxed max-w-[480px]">
                        We build high-performance digital products — from sleek
                        interfaces to robust systems — that move businesses forward.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        <a
                            href="#work"
                            className="inline-flex items-center justify-center bg-[#0a0f1e] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#2dd4bf] hover:text-[#0a0f1e] transition-colors duration-300"
                        >
                            See Our Work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center border border-[#0a0f1e]/20 text-[#0a0f1e] text-xs font-bold uppercase tracking-widest px-8 py-4 hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-colors duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 md:mt-16 flex flex-wrap justify-center lg:justify-start gap-x-14 gap-y-8 border-t border-[#0a0f1e]/10 pt-8 w-full">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center lg:text-left">
                                <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#2dd4bf]">
                                    {s.value}
                                </div>
                                <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#0a0f1e]/40">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Single phone visual */}
                <div className="flex justify-center">
                    <img
                        src={heroPhoneComposition}
                        alt="Phone mockup with floating social media and audience cards"
                        className="w-full max-w-[500px] h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}