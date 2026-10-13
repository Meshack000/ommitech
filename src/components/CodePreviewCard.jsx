import { useEffect, useState } from 'react'

const codeLines = [
    [{ text: 'function ', className: 'text-violet-400' }, { text: 'OmmitechPreview', className: 'text-amber-200' }, { text: '() {' }],
    [{ text: '  ' }, { text: 'return', className: 'text-violet-400' }, { text: ' (' }],
    [{ text: '    <' }, { text: 'PhoneMockup', className: 'text-sky-300' }],
    [{ text: '      title=' }, { text: '"Digital skills, built in Kumasi."', className: 'text-emerald-300' }],
    [{ text: '      description=' }, { text: '"Web development and UI/UX, learned by making."', className: 'text-emerald-300' }],
    [{ text: '      buttonLabel=' }, { text: '"See the training"', className: 'text-emerald-300' }],
    [{ text: '    />' }],
    [{ text: '  });' }],
    [{ text: '}' }],
]
const totalCharacters = codeLines.flat().reduce((total, token) => total + token.text.length, 0)

function PhonePreview() {
    return (
        <div className="phone-preview-device w-[min(100%,260px)] rounded-[2.5rem] border-[6px] border-neutral-800 bg-neutral-950 p-2 shadow-2xl shadow-black/40">
            <div className="overflow-hidden rounded-[2rem] bg-white">
                <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[10px] font-semibold text-neutral-800">
                    <span>9:41</span>
                    <span aria-hidden="true">●●● ▰</span>
                </div>
                <div className="relative mx-auto mb-5 h-5 w-20 rounded-full bg-neutral-950" />
                <div className="px-5 pb-7 pt-2">
                    <div className="mb-8 flex items-center justify-between">
                        <span className="text-sm font-bold tracking-tight text-neutral-900">ommi<span className="text-teal-500">.</span></span>
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-neutral-100 text-neutral-700" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                        </span>
                    </div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-700">Kumasi · Ghana</p>
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-950">Digital skills, built by doing.</h2>
                    <p className="mt-3 text-xs leading-5 text-neutral-600">Web development and UI/UX, learned through hands-on projects.</p>
                    <a href="/#training" className="mt-5 block w-full rounded-xl bg-neutral-950 px-4 py-3 text-center text-xs font-semibold text-white">
                        See the training
                    </a>
                    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-neutral-50 p-3">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-100 text-teal-700" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold text-neutral-900">Learn by making</p>
                            <p className="mt-0.5 text-[10px] text-neutral-500">Small projects. Useful skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CodePreviewCard() {
    const [activeView, setActiveView] = useState('code')
    const [typedCharacters, setTypedCharacters] = useState(0)
    const [replayKey, setReplayKey] = useState(0)

    useEffect(() => {
        if (activeView !== 'code' || typedCharacters >= totalCharacters) return undefined

        const typingInterval = window.setInterval(() => {
            setTypedCharacters((characters) => Math.min(characters + 1, totalCharacters))
        }, 22)

        return () => window.clearInterval(typingInterval)
    }, [activeView, replayKey, typedCharacters])

    useEffect(() => {
        if (activeView !== 'code' || typedCharacters !== totalCharacters) return undefined

        const previewTimeout = window.setTimeout(() => setActiveView('preview'), 1500)
        return () => window.clearTimeout(previewTimeout)
    }, [activeView, typedCharacters, replayKey])

    useEffect(() => {
        if (activeView !== 'preview') return undefined

        const replayTimeout = window.setTimeout(() => {
            setTypedCharacters(0)
            setActiveView('code')
        }, 4000)

        return () => window.clearTimeout(replayTimeout)
    }, [activeView])

    const replay = () => {
        setActiveView('code')
        setTypedCharacters(0)
        setReplayKey((key) => key + 1)
    }

    return (
        <section aria-label="Code and mobile preview example" className="overflow-hidden border border-neutral-800 bg-neutral-950 text-white shadow-xl shadow-black/10">
            <header className="border-b border-neutral-800 bg-neutral-900">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="truncate font-mono text-xs text-neutral-400">ommitech-preview.jsx</span>
                    <span className="justify-self-end font-mono text-xs text-neutral-500">Example</span>
                </div>

                <div className="flex items-center justify-between px-4 sm:px-5">
                    <div className="flex gap-1" role="tablist" aria-label="Code example view">
                        {['preview', 'code'].map((view) => (
                            <button
                                key={view}
                                type="button"
                                role="tab"
                                id={`code-preview-tab-${view}`}
                                aria-selected={activeView === view}
                                aria-controls="code-preview-panel"
                                onClick={() => view === 'code' ? replay() : setActiveView(view)}
                                className={`border-b-2 px-3 py-2 text-xs font-medium transition-colors ${
                                    activeView === view
                                        ? 'border-teal-400 text-white'
                                        : 'border-transparent text-neutral-500 hover:text-neutral-300'
                                }`}
                            >
                                {view === 'preview' ? 'Live Preview' : 'Code'}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={replay}
                        aria-label="Replay code typing"
                        className="mb-1 rounded-md p-1.5 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                    </button>
                </div>
            </header>

            <div
                id="code-preview-panel"
                role="tabpanel"
                aria-labelledby={`code-preview-tab-${activeView}`}
                className={`flex min-h-[390px] items-center justify-center ${
                    activeView === 'code'
                        ? 'overflow-x-auto bg-neutral-950 px-4 py-5 sm:px-6'
                        : 'bg-[#e8eeeb] p-6 sm:p-8'
                } transition-colors duration-700`}
            >
                {activeView === 'code' ? (
                    <pre className="w-full font-mono text-xs leading-7 sm:text-[13px]">
                        <code>
                            {(() => {
                                let remainingCharacters = typedCharacters

                                return codeLines.map((line, index) => (
                                    <span className="flex min-w-max" key={index}>
                                        <span className="mr-6 w-5 select-none text-right text-neutral-600" aria-hidden="true">{index + 1}</span>
                                        <span className="text-neutral-300">
                                            {line.map((token, tokenIndex) => {
                                                const visibleLength = Math.min(remainingCharacters, token.text.length)
                                                remainingCharacters -= visibleLength
                                                return (
                                                    <span className={token.className} key={tokenIndex}>
                                                        {token.text.slice(0, visibleLength)}
                                                    </span>
                                                )
                                            })}
                                        </span>
                                    </span>
                                ))
                            })()}
                        </code>
                    </pre>
                ) : (
                    <div className="preview-scene">
                        <div className="preview-orbit" aria-hidden="true" />
                        <div className="preview-glow" aria-hidden="true" />
                        <div className="phone-preview-enter">
                            <PhonePreview />
                        </div>
                        <div className="preview-sheen" aria-hidden="true" />
                    </div>
                )}
            </div>
        </section>
    )
}
