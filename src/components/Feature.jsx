import React from 'react';

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

export default function RecentFeatures() {
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
