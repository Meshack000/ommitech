import { Link } from 'react-router-dom'

export default function ReserveSpotPage() {
    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = formData.get('name').trim()
        const email = formData.get('email').trim()
        const topic = formData.get('topic')
        const message = formData.get('message').trim()
        const body = [
            'Hi Ommitech,',
            '',
            'I’d like to request a spot in an upcoming live online class.',
            '',
            `Name: ${name}`,
            `Email: ${email}`,
            `Class: ${topic}`,
            ...(message ? [`What I’d like to learn: ${message}`] : []),
            '',
            'Please send me the upcoming class times and details on how to join.',
        ].join('\n')

        window.location.href = `mailto:hello@ommitech.co?subject=${encodeURIComponent('Online class spot request')}&body=${encodeURIComponent(body)}`
    }

    return (
        <main className="bg-[#f7f8f7] px-6 py-16 text-[#0a0f1e] md:px-12 md:py-24">
            <div className="mx-auto max-w-6xl">
                <Link
                    to="/#training"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0a0f1e]/60 transition-colors hover:text-[#11998e]"
                >
                    <span aria-hidden="true">←</span> Back to training
                </Link>

                <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <section>
                        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#11998e]">
                            Live online classes
                        </p>
                        <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                            Reserve your spot.
                        </h1>
                        <p className="mt-5 max-w-lg text-base leading-7 text-[#0a0f1e]/65">
                            Tell us what you want to learn. We’ll get back to you with upcoming class times and the details you need to join.
                        </p>

                        <div className="mt-10 border-l-2 border-[#2dd4bf] bg-white px-6 py-5">
                            <h2 className="text-sm font-bold">What happens next?</h2>
                            <p className="mt-2 text-sm leading-6 text-[#0a0f1e]/60">
                                This is a request, not an instant booking. Your place is confirmed after we reply and agree on a class time.
                            </p>
                        </div>
                    </section>

                    <section className="bg-white p-6 shadow-[0_20px_60px_rgba(10,15,30,0.06)] sm:p-9">
                        <h2 className="text-xl font-bold tracking-tight">Request a class spot</h2>
                        <p className="mt-2 text-sm leading-6 text-[#0a0f1e]/60">
                            Fill this in and your email app will open with a request ready to review and send.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold">Your name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="w-full border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                />
                            </div>

                            <div>
                                <label htmlFor="topic" className="mb-2 block text-sm font-semibold">Which class interests you?</label>
                                <select
                                    id="topic"
                                    name="topic"
                                    defaultValue=""
                                    required
                                    className="w-full border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                >
                                    <option value="" disabled>Select a class</option>
                                    <option value="Web development">Web development</option>
                                    <option value="UI/UX design">UI/UX design</option>
                                    <option value="Both web development and UI/UX">Both</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                                    What would you like to learn? <span className="font-normal text-[#0a0f1e]/45">(optional)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    className="w-full resize-y border border-[#0a0f1e]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#11998e]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 bg-[#0a0f1e] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1e] sm:w-auto"
                            >
                                Continue in email <span aria-hidden="true">→</span>
                            </button>
                        </form>

                        <p className="mt-5 text-xs leading-5 text-[#0a0f1e]/50">
                            Prefer to email us directly? <a href="mailto:hello@ommitech.co" className="font-semibold text-[#11998e] underline underline-offset-2">hello@ommitech.co</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
