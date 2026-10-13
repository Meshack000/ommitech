import React from 'react';
import founderAvatar from '../assets/images/meshack.webp';
import sheilaAvatar from '../assets/images/sheila.webp';

const leadership = [
    {
        name: "Oppong Mpiani Meshack",
        initials: "OM",
        avatar: founderAvatar,
        role: "Founder",
        title: "Chief Executive Officer",
        label: "CEO",
        description: "Leads the company vision, business direction, and strategic partnerships while setting the long-term roadmap for growth and impact."
    },
    {
        name: "Sheila Xornam Adanyah",
        initials: "SA",
        avatar: sheilaAvatar,
        avatarPosition: "object-[center_32%]",
        role: "Secretary",
        title: "Head of UI/UX Design",
        label: "Secretary • UI/UX Lead",
        description: "Leads design direction, user-centered experiences, and operational support to ensure the brand delivers both clarity and confidence."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white px-6 py-24 font-geist text-[#0a0f1e] selection:bg-[#2dd4bf]/20">
            <div className="max-w-[1200px] mx-auto">

                {/* Header: Centered & Minimal */}
                <header className="mb-32 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                        Excellence Engineered
                    </h1>
                    <div className="h-[1px] w-24 bg-[#2dd4bf]"></div>
                </header>

                {/* Leadership Team */}
                <div className="mb-32">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#0a0f1e]/40 mb-10">
                        // Our Leadership
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leadership.map((member, i) => (
                            <div key={i} className="border border-[#0a0f1e]/10 bg-[#fafafa] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="w-24 h-24 overflow-hidden rounded-full border border-[#0a0f1e]/5 bg-[#2dd4bf]/15 text-[#0a0f1e] flex items-center justify-center text-2xl font-bold">
                                        {member.avatar ? (
                                            <img
                                                src={member.avatar}
                                                alt={`${member.name}, ${member.role}`}
                                                className={`h-full w-full scale-125 object-cover ${member.avatarPosition || 'object-center'}`}
                                                width="96"
                                                height="96"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        ) : member.initials}
                                    </div>
                                    <div className="bg-[#0a0f1e] text-white px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
                                        {member.label}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight mb-2">{member.name}</h3>
                                <div className="mb-4">
                                    <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#2dd4bf] font-bold mb-2">{member.role}</p>
                                    <p className="text-base font-bold tracking-tight text-[#0a0f1e]">{member.title}</p>
                                </div>
                                <p className="text-sm text-[#0a0f1e]/60 leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content: Two Column Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">

                    {/* Left Side: The "Mission" */}
                    <div className="lg:col-span-7">
                        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#0a0f1e]/40 mb-8">
                            // Our Philosophy
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-10">
                            We don't just design interfaces; <br />
                            <span className="text-[#0a0f1e]/30 italic">we engineer experiences.</span>
                        </h2>
                        <div className="space-y-6 text-base text-[#0a0f1e]/60 leading-relaxed font-normal max-w-xl">
                            <p>
                                Based on technical rigor and strategic intentionality, we specialize in
                                bridging the gap between complex front-end engineering and high-fidelity
                                UI design.
                            </p>
                            <p>
                                Whether you're building a product, scaling a brand, or learning the craft,
                                our goal is to help people create digital experiences that are both polished
                                and practical, while also teaching the skills behind them.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Technical Specs / Capabilities */}
                    <div className="lg:col-span-5 border border-[#0a0f1e]/10 p-10 rounded-sm bg-[#fafafa]">
                        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#2dd4bf] font-bold mb-8">
                            Technical Stack
                        </p>
                        <ul className="space-y-6">
                            {[
                                { label: "Frameworks", value: "React / Tailwind / Next.js" },
                                { label: "Design", value: "UI/UX / Logo Design / Branding" },
                                { label: "Training", value: "Web Development & UI/UX Learning" },
                                { label: "Solutions", value: "End-to-End Website Delivery" }
                            ].map((item, i) => (
                                <li key={i} className="flex flex-col border-b border-[#0a0f1e]/5 pb-4">
                                    <span className="text-[10px] font-mono uppercase opacity-30 mb-1">{item.label}</span>
                                    <span className="text-sm font-bold tracking-tight">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer: Re-integrated structured block */}
                <div className="mt-32 border border-[#0a0f1e]/10 bg-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors hover:border-[#0a0f1e]">
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