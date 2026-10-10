import React from 'react';

const works = [
    {
        tag: "Front-End",
        title: "Web Development",
        client: "Build & Launch",
        description: "We design and build modern responsive websites and apps, and we also teach people how to do it through hands-on, practical learning."
    },
    {
        tag: "UI/UX",
        title: "UI/UX Design",
        client: "Design Thinking",
        description: "From user flows and wireframes to polished interfaces, we help brands and learners create experiences that are both beautiful and effective."
    },
    {
        tag: "Identity",
        title: "Logo Design",
        client: "Brand Architecture",
        description: "Minimalist and scalable brand marks designed to communicate core values and establish a strong market presence."
    },
    {
        tag: "Training",
        title: "Learning & Mentorship",
        client: "For Beginners & Career Growth",
        description: "We offer guided learning for aspiring web developers and UI/UX designers who want to grow skills and build real-world projects."
    },
    {
        tag: "Systems",
        title: "Website Solutions",
        client: "End-to-End Delivery",
        description: "Developing robust, SEO-optimized websites that serve as a powerful digital headquarters for your business."
    },
    {
        tag: "Design",
        title: "Brand Strategy",
        client: "Visual Identity",
        description: "Defining color palettes, typography, and design systems to maintain consistency across all digital touchpoints."
    },
];

export default function RecentFeatures() {
    return (
        <div className="min-h-screen bg-white px-6 py-24 font-geist text-[#0a0f1e] selection:bg-[#2dd4bf]/20">
            <div className="max-w-[1200px] mx-auto">

                {/* Centered Minimalist Header */}
                <header className="mb-24 flex flex-col items-center text-center">
                    <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-none">
                        Excellence Engineered
                    </h1>
                </header>

                {/* Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {works.map((f, i) => (
                        <div
                            key={i}
                            className="group border border-[#0a0f1e]/10 p-8 flex flex-col justify-between aspect-[4/3] hover:border-[#2dd4bf] transition-all duration-300"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2dd4bf] font-bold">
                                        {f.tag}
                                    </span>
                                    {/* Small, technical index marker */}
                                    <span className="font-mono text-[9px] opacity-20 uppercase">Ref_{i + 1}</span>
                                </div>

                                <h2 className="text-xl font-bold tracking-tight mb-1 group-hover:text-[#2dd4bf] transition-colors">
                                    {f.title}
                                </h2>
                                <p className="text-[10px] font-mono uppercase tracking-tighter opacity-40 mb-6">
                                    {f.client}
                                </p>

                                <p className="text-sm text-[#0a0f1e]/60 leading-relaxed font-normal">
                                    {f.description}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-2">
                                <div className="h-[1px] w-8 bg-[#2dd4bf] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    View Service
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Re-integrated Footer */}
                <div className="mt-24 border border-[#0a0f1e]/10 bg-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors hover:border-[#0a0f1e]">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0a0f1e] mb-2 tracking-tight">
                            Ready to build or learn?
                        </h3>
                        <p className="text-sm font-mono uppercase tracking-widest text-[#0a0f1e]/40">
                            Let's turn your idea into a product or your interest into skills.
                        </p>
                    </div>
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-[#0a0f1e] text-white text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-full hover:bg-[#2dd4bf] hover:text-[#0a0f1e] transition-all duration-300 text-center shadow-lg shadow-[#0a0f1e]/5"
                    >
                        Get in touch &rarr;
                    </a>
                </div>

            </div>
        </div>
    );
}