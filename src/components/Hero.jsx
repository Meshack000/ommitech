import heroPhoneComposition from "../assets/images/hero-phone-composition.png"

export default function Hero() {
    return (
        <section className="bg-white text-[#0a0f1e] px-6 md:px-16 lg:px-24 xl:px-32 pt-16 md:pt-24 pb-24 font-geist selection:bg-[#2dd4bf]/20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14 items-center">

                {/* Left — Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="hero-slide-in font-mono text-[10px] uppercase tracking-[0.4em] text-[#2dd4bf] font-bold mb-6">
                        Digital solutions · Practical training
                    </p>

                    <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tighter md:text-6xl">
                        <span className="hero-slide-in block" style={{ animationDelay: "150ms" }}>
                            We build digital.
                        </span>
                        <span className="hero-slide-in mt-2 block text-[#2dd4bf]" style={{ animationDelay: "450ms" }}>
                            You grow with us.
                        </span>
                    </h1>

                    <p className="hero-slide-in mt-6 max-w-[480px] text-base leading-relaxed text-[#0a0f1e]/60 md:text-lg" style={{ animationDelay: "750ms" }}>
                        Web, design, and practical tech training.
                    </p>

                    <div className="hero-slide-in mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center" style={{ animationDelay: "1s" }}>
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