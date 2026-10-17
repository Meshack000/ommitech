import React from 'react';
import { Link } from 'react-router-dom';

const leadership = [
    {
        name: 'Board Chair',
        initials: 'BC',
        role: 'Strategy',
        title: 'Leadership & Growth',
        label: 'Board chair',
        description: 'Shapes the company direction, keeps the vision clear, and aligns every project with long-term business goals.',
        avatarGradient: 'linear-gradient(135deg, #0a0f1e 0%, #1a243b 35%, #2dd4bf 100%)'
    },
    {
        name: 'CEO',
        initials: 'CE',
        role: 'Executive',
        title: 'Client Experience',
        label: 'CEO',
        description: 'Leads client partnerships and keeps product, design, and delivery working toward the same outcome.',
        avatarGradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 35%, #67e8f9 100%)'
    },
    {
        name: 'Design Lead',
        initials: 'DL',
        role: 'UI/UX',
        title: 'User Experience',
        label: 'Design',
        description: 'Builds thoughtful interface systems, journeys, and screens that make digital products simple and intuitive.',
        avatarGradient: 'linear-gradient(135deg, #1f2937 0%, #4f46e5 30%, #c084fc 100%)'
    },
    {
        name: 'Product Manager',
        initials: 'PM',
        role: 'Planning',
        title: 'Product Direction',
        label: 'Product',
        description: 'Translates business needs into clear plans, priorities, and practical roadmaps for digital projects.',
        avatarGradient: 'linear-gradient(135deg, #144272 0%, #2dd4bf 50%, #d1fae5 100%)'
    },
    {
        name: 'Engineering Lead',
        initials: 'EL',
        role: 'Web Systems',
        title: 'Frontend Delivery',
        label: 'Tech',
        description: 'Builds responsive experiences and turns design ideas into reliable, polished web interfaces.',
        avatarGradient: 'linear-gradient(135deg, #0f172a 0%, #0891b2 35%, #5eead4 100%)'
    },
    {
        name: 'Operations',
        initials: 'OP',
        role: 'Support',
        title: 'Delivery & Partnerships',
        label: 'Ops',
        description: 'Keeps schedules, communication, and project momentum running smoothly from kickoff to launch.',
        avatarGradient: 'linear-gradient(135deg, #111827 0%, #f59e0b 35%, #fef3c7 100%)'
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white px-6 py-24 font-geist text-[#0a0f1e] selection:bg-[#2dd4bf]/20">
            <div className="max-w-[1200px] mx-auto">

                <header className="mb-24 max-w-4xl border-b border-[#0a0f1e]/10 pb-12 md:mb-28 md:pb-16">
                    <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#11998e]">
                        Ommitech · Kumasi, Ghana
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.98] mb-6">
                        A dependable IT company and UI/UX studio in Kumasi, Ghana.
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-[#0a0f1e]/60 md:text-lg">
                        Ommitech is a growing IT company in Ghana building websites, digital products, brands, and practical training for people who want to learn real-world web and design skills.
                    </p>
                </header>

                <div className="mb-32">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#0a0f1e]/40 mb-10">
                        The board behind the work
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {leadership.map((member, i) => (
                            <div key={i} className="group border border-[#0a0f1e]/10 bg-[#fafafa] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#11998e] hover:shadow-md">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <div className="relative h-24 w-24 overflow-hidden rounded-[28px] border border-white/60 shadow-inner" style={{ background: member.avatarGradient }}>
                                        <div className="absolute left-1/2 top-3 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-white/80 bg-white/15" />
                                        <div className="absolute inset-x-3 bottom-0 h-12 rounded-t-[20px] bg-white/15" />
                                        <div className="absolute inset-x-0 bottom-4 text-center text-lg font-bold tracking-[0.18em] text-white/90">
                                            {member.initials}
                                        </div>
                                    </div>
                                    <div className="rounded-full border border-[#0a0f1e]/10 bg-[#0a0f1e] px-3 py-2 text-[9px] font-mono uppercase tracking-[0.28em] text-white">
                                        {member.label}
                                    </div>
                                </div>

                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#0a0f1e]">{member.name}</h3>
                                <div className="mb-4">
                                    <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.35em] text-[#2dd4bf] font-bold">{member.role}</p>
                                    <p className="text-base font-bold tracking-tight text-[#0a0f1e]">{member.title}</p>
                                </div>
                                <p className="text-sm leading-relaxed text-[#0a0f1e]/60">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">

                    {/* Left Side: The "Mission" */}
                    <div className="lg:col-span-7">
                        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#0a0f1e]/40 mb-8">
                            What we believe
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-10">
                            Good digital work starts with listening.
                        </h2>
                        <div className="space-y-6 text-base text-[#0a0f1e]/60 leading-relaxed font-normal max-w-xl">
                            <p>
                                Before we design or build, we want to understand who the work is for and what it needs to do. That keeps the decisions practical and the finished work clear.
                            </p>
                            <p>
                                Ommitech brings web development, UI/UX, brand identity, and Photoshop design together with hands-on training for people who want to learn those skills.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Technical Specs / Capabilities */}
                    <div className="lg:col-span-5 border border-[#0a0f1e]/10 p-10 rounded-sm bg-[#fafafa]">
                        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#2dd4bf] font-bold mb-8">
                            What we work on
                        </p>
                        <ul className="space-y-6">
                            {[
                                { label: "Frameworks", value: "React / Tailwind / Next.js" },
                                { label: "Design", value: "UI/UX / Brand Identity / Photoshop Design" },
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

                <div className="mt-32 border border-[#0a0f1e]/10 bg-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors hover:border-[#11998e]">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0a0f1e] mb-2 tracking-tight">
                            Have a project or a question about training?
                        </h3>
                        <p className="text-sm leading-6 text-[#0a0f1e]/55">
                            Tell us what you have in mind and we’ll talk through the next step.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-[#0a0f1e] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#2dd4bf] hover:text-[#0a0f1e] transition-colors duration-300 text-center"
                    >
                        Get in touch <span aria-hidden="true" className="ml-3">→</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}