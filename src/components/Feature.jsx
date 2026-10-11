import React, { useState } from 'react';

const services = [
    {
        number: "01",
        title: "Web Development",
        description: "Responsive, reliable websites and web applications built around your goals and your customers."
    },
    {
        number: "02",
        title: "UI/UX Design",
        description: "Thoughtful user journeys and polished interfaces that make digital products clear and easy to use."
    },
    {
        number: "03",
        title: "Brand Identity",
        description: "Distinctive visual identities that help businesses communicate consistently and stand out."
    }
];

const learningTopics = [
    "Web development",
    "UI/UX design",
    "Practical projects",
    "Guided mentorship"
];

const process = [
    {
        number: "01",
        title: "Discover",
        description: "We listen, understand your goals, and agree on what success should look like."
    },
    {
        number: "02",
        title: "Plan & create",
        description: "We shape the right approach, then design, build, or structure a learning path around it."
    },
    {
        number: "03",
        title: "Launch & grow",
        description: "We help you put the work into practice and move forward with confidence."
    }
];

const workTabs = ["All", "Web Development", "UI/UX Design", "Brand Identity"];

const workItems = [
    {
        title: "Kumasi Business Portal",
        category: "Web Development",
        tag: "Website + CRM",
        description: "A clean digital platform that helped a local business connect with new customers and manage inquiries more efficiently.",
        result: "Improved online visibility and customer response speed",
        stack: ["React", "Tailwind", "Business flow"]
    },
    {
        title: "Campus Event Experience",
        category: "UI/UX Design",
        tag: "Mobile-first UX",
        description: "A user-focused event landing page designed to help students discover workshops, speakers, and registration details with ease.",
        result: "Simplified event discovery and higher engagement",
        stack: ["UX strategy", "Wireframes", "Prototype"]
    },
    {
        title: "Freshbrand Studio",
        category: "Brand Identity",
        tag: "Brand system",
        description: "A visual identity refresh for a growing creative brand, built around clearer communication and stronger recognition.",
        result: "Created a more confident and memorable brand presence",
        stack: ["Logo", "Color", "Typography"]
    },
    {
        title: "Clinic Booking App",
        category: "Web Development",
        tag: "App + dashboard",
        description: "A practical booking interface for a healthcare service that needed an easier way to manage appointments online.",
        result: "Reduced booking friction and improved scheduling clarity",
        stack: ["Frontend", "Bookings", "Dashboard"]
    },
    {
        title: "School Community Hub",
        category: "UI/UX Design",
        tag: "Student portal",
        description: "A community platform concept for students to discover events, resources, and updates from a single place.",
        result: "Made information easier to find and use",
        stack: ["Research", "Interface", "Testing"]
    },
    {
        title: "Ghana Creative Identity",
        category: "Brand Identity",
        tag: "Brand launch",
        description: "A full identity package for a small creative business focused on helping founders tell their story better online.",
        result: "Strengthened the market position and visual consistency",
        stack: ["Identity", "Campaign", "Strategy"]
    }
];

export default function RecentFeatures() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredWorks =
        activeTab === "All"
            ? workItems
            : workItems.filter((item) => item.category === activeTab);

    return (
        <section id="services" className="scroll-mt-24 bg-white px-6 py-20 font-geist text-[#0a0f1e] selection:bg-[#2dd4bf]/20 md:px-12 md:py-28">
            <div className="mx-auto max-w-7xl">
                <header className="mb-12 max-w-2xl">
                    <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                        // What we do
                    </p>
                    <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                        Digital solutions for businesses. <span className="text-[#0a0f1e]/40">Practical skills for people.</span>
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[#0a0f1e]/60">
                        Whether you need a digital product built or want to learn how to create one, Ommitech can help you take the next step.
                    </p>
                </header>

                <div className="mb-20 grid gap-5 md:grid-cols-3">
                    {services.map((service) => (
                        <article key={service.number} className="group flex min-h-[240px] flex-col border border-[#0a0f1e]/10 p-7 transition-colors duration-300 hover:border-[#2dd4bf] md:p-8">
                            <span className="mb-8 font-mono text-[10px] font-bold tracking-[0.2em] text-[#2dd4bf]">{service.number}</span>
                            <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-[#11998e]">{service.title}</h3>
                            <p className="text-sm leading-6 text-[#0a0f1e]/60">{service.description}</p>
                        </article>
                    ))}
                </div>

                <section id="training" className="scroll-mt-28 overflow-hidden bg-[#0a0f1e] text-white">
                    <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-12 lg:p-16">
                        <div>
                            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                                // Learn with Ommitech
                            </p>
                            <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                Build your skills by doing real work.
                            </h3>
                            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                                We guide aspiring creators through web development and UI/UX design with practical learning, project work, and mentorship.
                            </p>
                            <a href="/#contact" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#2dd4bf] transition-colors hover:text-white">
                                Ask about learning <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {learningTopics.map((topic, index) => (
                                <li key={topic} className="flex min-h-20 items-center gap-4 border border-white/15 px-5 py-4">
                                    <span className="font-mono text-[10px] text-[#2dd4bf]">0{index + 1}</span>
                                    <span className="text-sm font-semibold">{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="work" className="scroll-mt-28 py-20 md:py-24">
                    <div className="grid gap-8 border-y border-[#0a0f1e]/10 py-10 md:grid-cols-[1fr_auto] md:items-end md:py-14">
                        <div className="max-w-2xl">
                            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                                // Selected work
                            </p>
                            <h3 className="text-3xl font-bold tracking-tight md:text-5xl">Good work speaks for itself.</h3>
                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#0a0f1e]/60 md:text-base">
                                We build thoughtful digital experiences and practical solutions for businesses, creators, and communities. Here is a snapshot of the kind of work we’re proud to share.
                            </p>
                        </div>
                        <a href="/#contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0a0f1e] transition-colors hover:text-[#11998e]">
                            Discuss a project <span aria-hidden="true" className="text-[#2dd4bf]">→</span>
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {workTabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                                    activeTab === tab
                                        ? "border-[#0a0f1e] bg-[#0a0f1e] text-white"
                                        : "border-[#0a0f1e]/10 bg-white text-[#0a0f1e]/70 hover:border-[#2dd4bf] hover:text-[#11998e]"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {filteredWorks.map((item, index) => (
                            <article
                                key={`${item.title}-${index}`}
                                className="group flex min-h-[360px] flex-col overflow-hidden border border-[#0a0f1e]/10 bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf] hover:shadow-[0_20px_60px_rgba(17,153,142,0.08)]"
                            >
                                <div className="flex min-h-[150px] items-end justify-between border-b border-[#0a0f1e]/10 bg-gradient-to-br from-[#dffaf6] via-white to-[#e7ecff] p-5">
                                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a0f1e]/70">
                                        {item.tag}
                                    </span>
                                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#2dd4bf]">
                                        0{index + 1}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#2dd4bf]">
                                        {item.category}
                                    </p>
                                    <h4 className="text-2xl font-bold tracking-tight text-[#0a0f1e]">{item.title}</h4>
                                    <p className="mt-4 text-sm leading-6 text-[#0a0f1e]/65">{item.description}</p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {item.stack.map((tech) => (
                                            <span key={tech} className="rounded-full border border-[#0a0f1e]/10 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0f1e]/70">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 border-t border-[#0a0f1e]/10 pt-4 text-sm font-medium text-[#0a0f1e]">
                                        <span className="text-[#0a0f1e]/60">Impact:</span> {item.result}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="py-20 md:py-24">
                    <header className="mb-10 max-w-xl">
                        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                            // How we work
                        </p>
                        <h3 className="text-3xl font-bold tracking-tight md:text-4xl">A clear path from idea to outcome.</h3>
                    </header>
                    <div className="grid gap-8 border-t border-[#0a0f1e]/10 pt-8 md:grid-cols-3 md:gap-10">
                        {process.map((step) => (
                            <article key={step.number}>
                                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#2dd4bf]">{step.number}</span>
                                <h4 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h4>
                                <p className="mt-2 text-sm leading-6 text-[#0a0f1e]/60">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <div className="flex flex-col gap-6 border border-[#0a0f1e]/10 p-8 md:flex-row md:items-center md:justify-between md:p-12">
                    <div>
                        <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#2dd4bf]">Your next step</p>
                        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to build or ready to learn?</h3>
                        <p className="mt-2 text-sm leading-6 text-[#0a0f1e]/60">Tell us what you have in mind, and we’ll help you find the right way forward.</p>
                    </div>
                    <a href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#0a0f1e] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1e]">
                        Get in touch <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
