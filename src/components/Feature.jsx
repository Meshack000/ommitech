import React, { useState } from 'react';
import gcbMobileBanking from '../assets/images/gcb-mobile-banking.webp';

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
        title: "GCB Mobile Banking",
        category: "UI/UX Design",
        image: gcbMobileBanking,
        href: "https://www.behance.net/gallery/248454041/GCB-Mobile-Banking-App-UIUX-Redesign-Case-Study",
        tag: "Mobile Banking App",
        description: "A mobile banking experience concept featuring secure sign-in, biometric access, and everyday account tools.",
        result: "Designed a clear, mobile-first banking experience",
        stack: ["Mobile Banking", "UI/UX", "Fintech"]
    },
    {
        title: "Kumasi Business Portal",
        category: "Web Development",
        image: null,
        href: null,
        tag: "Website + CRM",
        description: "A clean digital platform that helped a local business connect with new customers and manage inquiries more efficiently.",
        result: "Improved online visibility and customer response speed",
        stack: ["React", "Tailwind", "Business flow"]
    },
    {
        title: "Campus Event Experience",
        category: "UI/UX Design",
        image: null,
        href: null,
        tag: "Mobile-first UX",
        description: "A user-focused event landing page designed to help students discover workshops, speakers, and registration details with ease.",
        result: "Simplified event discovery and higher engagement",
        stack: ["UX strategy", "Wireframes", "Prototype"]
    },
    {
        title: "Freshbrand Studio",
        category: "Brand Identity",
        image: null,
        href: null,
        tag: "Brand system",
        description: "A visual identity refresh for a growing creative brand, built around clearer communication and stronger recognition.",
        result: "Created a more confident and memorable brand presence",
        stack: ["Logo", "Color", "Typography"]
    }
];

function WorkArtwork({ item, index }) {
    const isDesign = item.category === "UI/UX Design";
    const isBrand = item.category === "Brand Identity";

    return (
        <div
            className={`relative flex aspect-[1.35] items-center justify-center overflow-hidden rounded-2xl p-5 sm:p-8 ${
                item.image
                    ? "bg-[#f7f7f5]"
                    : isBrand
                        ? "bg-[#dce8df]"
                        : isDesign
                            ? "bg-[#e7e8f1]"
                            : "bg-[#e9e6df]"
            }`}
        >
            {!item.image && (
                <div className={`absolute -right-12 -top-20 h-56 w-56 rounded-full blur-3xl ${
                    isBrand ? "bg-[#b7d3be]/70" : isDesign ? "bg-[#c7c9e6]/80" : "bg-[#d8c6a6]/70"
                }`} />
            )}
            {item.image ? (
                <img
                    src={item.image}
                    alt={`${item.title} project preview`}
                    className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.025] sm:p-4"
                    loading="lazy"
                    decoding="async"
                />
            ) : isBrand ? (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-[#f5f3ea] shadow-[0_24px_60px_rgba(10,15,30,0.12)] transition-transform duration-700 group-hover:scale-[1.025]">
                    <div className="absolute left-5 top-5 flex gap-1.5">
                        {["bg-[#18271f]", "bg-[#91a58e]", "bg-[#d1a768]"].map((color) => (
                            <span key={color} className={`h-3 w-3 rounded-full ${color}`} />
                        ))}
                    </div>
                    <span className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#18271f]/40">
                        Identity system · 0{index + 1}
                    </span>
                    <div className="relative grid h-28 w-28 place-items-center rounded-full border border-[#18271f]/15 sm:h-36 sm:w-36">
                        <span className="font-serif text-6xl font-medium tracking-tighter text-[#18271f] sm:text-8xl">
                            {item.title.charAt(0)}
                        </span>
                        <span className="absolute -bottom-2 bg-[#f5f3ea] px-3 font-mono text-[8px] uppercase tracking-[0.28em] text-[#18271f]/60">
                            {item.title}
                        </span>
                    </div>
                </div>
            ) : isDesign ? (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute left-[7%] top-[12%] hidden w-[58%] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_24px_60px_rgba(10,15,30,0.12)] transition-transform duration-700 group-hover:-translate-x-2 group-hover:-rotate-1 sm:block">
                        <div className="flex h-7 items-center gap-1.5 border-b border-neutral-100 px-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                            <span className="ml-2 h-1.5 w-16 rounded-full bg-neutral-100" />
                        </div>
                        <div className="grid grid-cols-[1fr_0.8fr] gap-3 p-4">
                            <div className="space-y-2 self-center">
                                <span className="block h-2 w-12 rounded-full bg-[#9c9fbc]/40" />
                                <span className="block h-3 w-full rounded-sm bg-[#24253b]/80" />
                                <span className="block h-3 w-4/5 rounded-sm bg-[#24253b]/60" />
                                <span className="block h-1.5 w-full rounded-full bg-neutral-100" />
                                <span className="block h-1.5 w-4/5 rounded-full bg-neutral-100" />
                                <span className="mt-2 block h-5 w-16 rounded bg-[#373951]" />
                            </div>
                            <div className="min-h-24 rounded-lg bg-gradient-to-br from-[#c8c9dc] via-[#e4d8d3] to-[#a9b8bc]" />
                        </div>
                    </div>
                    <div className="relative z-10 ml-[28%] w-[30%] min-w-[92px] max-w-[150px] rounded-[1.6rem] border-[5px] border-[#222333] bg-[#222333] p-1.5 shadow-[0_28px_55px_rgba(10,15,30,0.28)] transition-transform duration-700 group-hover:translate-y-[-6px] group-hover:rotate-2">
                        <div className="min-h-36 rounded-[1.15rem] bg-[#f8f8fb] p-2.5 sm:min-h-44 sm:p-3">
                            <div className="mb-5 flex items-center justify-between">
                                <span className="h-1.5 w-10 rounded-full bg-[#35364b]" />
                                <span className="h-4 w-4 rounded-full bg-[#e3e4ee]" />
                            </div>
                            <span className="mb-2 block h-16 rounded-lg bg-gradient-to-br from-[#dedfee] to-[#b8bbd2] sm:h-20" />
                            <span className="mb-1.5 block h-1.5 w-4/5 rounded-full bg-[#35364b]/70" />
                            <span className="block h-1.5 w-full rounded-full bg-neutral-200" />
                            <span className="mt-3 block h-5 rounded-md bg-[#373951]" />
                        </div>
                    </div>
                    <span className="absolute bottom-[12%] right-[8%] rounded-full border border-white/80 bg-white/75 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-[#34364e]/65 shadow-sm">
                        Mobile-first UX
                    </span>
                </div>
            ) : (
                <div className="relative w-full max-w-[650px] rounded-xl border border-white/80 bg-[#f8f7f4] p-2 shadow-[0_24px_60px_rgba(10,15,30,0.16)] transition-transform duration-700 group-hover:scale-[1.025] sm:p-3">
                    <div className="flex h-6 items-center gap-1.5 border-b border-neutral-200/80 px-2 sm:h-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d5d1ca]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d5d1ca]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d5d1ca]" />
                        <span className="mx-auto h-1.5 w-[38%] rounded-full bg-neutral-200" />
                    </div>
                    <div className="grid min-h-36 grid-cols-[1fr_0.82fr] items-center gap-3 p-3 sm:min-h-48 sm:gap-8 sm:p-7">
                        <div>
                            <span className="mb-2 block h-1.5 w-14 rounded-full bg-[#9a8766]/45" />
                            <span className="mb-1.5 block h-3 w-full rounded-sm bg-[#1b211f]/85 sm:h-4" />
                            <span className="mb-3 block h-3 w-4/5 rounded-sm bg-[#1b211f]/70 sm:h-4" />
                            <span className="mb-1.5 block h-1 w-full rounded-full bg-neutral-200" />
                            <span className="mb-3 block h-1 w-4/5 rounded-full bg-neutral-200" />
                            <span className="block h-5 w-16 rounded-sm bg-[#1b211f] sm:h-7 sm:w-24" />
                        </div>
                        <div className="relative grid h-full min-h-28 place-items-center overflow-hidden rounded-lg bg-[#d9d4ca] sm:min-h-36">
                            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#c1b8a8] sm:h-36 sm:w-36" />
                            <div className="relative h-[72%] w-[65%] rounded-t-full bg-gradient-to-br from-[#eeeae3] to-[#aba18f] shadow-lg" />
                            <span className="absolute bottom-2 left-2 font-mono text-[7px] uppercase tracking-[0.2em] text-[#302d28]/55">
                                {item.tag}
                            </span>
                        </div>
                    </div>
                </div>
            )}
            <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#0a0f1e]/40 sm:bottom-5 sm:left-6">
                Selected work <span className="mx-1 text-[#0a0f1e]/20">/</span> 0{index + 1}
            </span>
        </div>
    );
}

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
                    <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12 lg:p-16">
                        <div className="py-2">
                            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#2dd4bf]">
                                // Learn with Ommitech
                            </p>
                            <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                Build your skills by doing real work.
                            </h3>
                            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                                We guide aspiring creators through web development and UI/UX design with practical learning, project work, and mentorship.
                            </p>
                            <a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2dd4bf] transition-colors hover:text-white">
                                Ask about learning <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <img
                            src="/banner.webp"
                            alt="Ommitech learning banner: crafting digital experiences in UI/UX design, frontend development, graphic design, brand identity, and web design"
                            width="1630"
                            height="910"
                            loading="lazy"
                            decoding="async"
                            className="h-auto max-h-[360px] w-full object-contain"
                        />
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

                    <div className="mt-10 grid gap-x-7 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:gap-x-10">
                        {filteredWorks.map((item, index) => (
                            <article
                                key={`${item.title}-${index}`}
                                className="group min-w-0"
                            >
                                <WorkArtwork item={item} index={index} />
                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <div className="min-w-0">
                                        <h4 className="text-2xl font-bold tracking-tight text-[#0a0f1e] transition-colors duration-300 group-hover:text-[#11998e] sm:text-3xl">
                                            {item.href ? (
                                                <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                                            ) : item.title}
                                        </h4>
                                        <p className="mt-2 text-sm text-[#0a0f1e]/55">{item.tag}</p>
                                    </div>
                                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#0a0f1e]/15 text-lg transition-all duration-300 group-hover:border-[#0a0f1e] group-hover:bg-[#0a0f1e] group-hover:text-white" aria-hidden="true">↗</span>
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#0a0f1e]/10 pt-3">
                                    <span className="text-[11px] font-medium text-[#0a0f1e]/65">{item.category}</span>
                                    <span className="text-right text-[11px] text-[#0a0f1e]/40">{item.stack.slice(0, 2).join(" · ")}</span>
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
