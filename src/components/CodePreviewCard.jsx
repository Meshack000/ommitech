import { useEffect, useState } from 'react'

const codeSnippet = `function PhoneDemo() {
  return (
    <PhoneMockup
      title="Your next idea"
      description="Made for mobile."
      buttonLabel="Get started"
    />
  );
}`

function highlightCodeLine(line) {
    const tokens = line.split(/("(?:[^"]*)"|'(?:[^']*)'|\\b(?:function|return)\\b|\\bPhoneMockup\\b|\\bPhoneDemo\\b)/g)

    return tokens.map((token, index) => {
        let color = 'text-neutral-300'

        if (/^["']/.test(token)) color = 'text-emerald-300'
        else if (token === 'function' || token === 'return') color = 'text-violet-400'
        else if (token === 'PhoneMockup') color = 'text-sky-300'
        else if (token === 'PhoneDemo') color = 'text-amber-200'

        return <span className={color} key={`${index}-${token}`}>{token}</span>
    })
}

function PhonePreview() {
    return (
        <div className="w-[min(100%,260px)] rounded-[2.5rem] border-[6px] border-neutral-800 bg-neutral-950 p-2 shadow-2xl shadow-black/40">
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
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-600">Ideas into impact</p>
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-950">Your next idea starts here.</h2>
                    <p className="mt-3 text-xs leading-5 text-neutral-500">Digital products and practical skills, thoughtfully built for you.</p>
                    <button type="button" className="mt-5 w-full rounded-xl bg-neutral-950 px-4 py-3 text-xs font-semibold text-white">
                        Get started
                    </button>
                    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-neutral-50 p-3">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-100 text-teal-700" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold text-neutral-900">Built with purpose</p>
                            <p className="mt-0.5 text-[10px] text-neutral-500">Designed in Kumasi, Ghana</p>
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
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (!isTyping) return undefined

        if (typedCharacters >= codeSnippet.length) {
            const previewTimer = setTimeout(() => {
                setActiveView('preview')
                setIsTyping(false)
            }, 1200)

            return () => clearTimeout(previewTimer)
        }

        const typingTimer = setTimeout(() => {
            setTypedCharacters((count) => count + 1)
        }, 35)

        return () => clearTimeout(typingTimer)
    }, [isTyping, typedCharacters])

    const replay = () => {
        setTypedCharacters(0)
        setActiveView('code')
        setIsTyping(true)
    }

    return (
        <section aria-label="Interactive code example" className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 text-white shadow-2xl shadow-black/20">
            <header className="border-b border-neutral-800 bg-neutral-900">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="truncate font-mono text-xs text-neutral-400">phone-demo.jsx</span>
                    <span className="justify-self-end font-mono text-xs text-neutral-500">45%</span>
                </div>

                <div className="flex items-center justify-between px-4 sm:px-5">
                    <div role="tablist" aria-label="Code example view" className="flex gap-1">
                        {['preview', 'code'].map((view) => (
                            <button
                                key={view}
                                type="button"
                                role="tab"
                                id={`code-preview-tab-${view}`}
                                aria-selected={activeView === view}
                                aria-controls="code-preview-panel"
                                onClick={() => setActiveView(view)}
                                className={`border-b-2 px-3 py-2 text-xs font-medium capitalize transition-colors ${
                                    activeView === view
                                        ? 'border-teal-400 text-white'
                                        : 'border-transparent text-neutral-500 hover:text-neutral-300'
                                }`}
                            >
                                {view === 'preview' ? 'Live preview' : 'Code'}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={replay}
                        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
                        aria-label="Replay code typing animation"
                    >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 12a9 9 0 1 0 2.64-6.36L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                        Replay
                    </button>
                </div>
            </header>

            <div
                id="code-preview-panel"
                role="tabpanel"
                aria-labelledby={`code-preview-tab-${activeView}`}
                className={`min-h-[390px] ${activeView === 'code' ? 'overflow-x-auto bg-neutral-950 px-4 py-5 sm:px-6' : 'flex items-center justify-center bg-neutral-900 p-6 sm:p-8'}`}
            >
                {activeView === 'code' ? (
                    <pre className="font-mono text-xs leading-7 sm:text-[13px]">
                        <code>
                            {codeSnippet.slice(0, typedCharacters).split('\n').map((line, index, lines) => (
                                <span className="flex min-w-max" key={index}>
                                    <span className="mr-6 w-5 select-none text-right text-neutral-600" aria-hidden="true">{index + 1}</span>
                                    <span>
                                        {highlightCodeLine(line)}
                                        {index === lines.length - 1 && isTyping && (
                                            <span className="ml-px inline-block h-4 w-1 animate-pulse bg-teal-300 align-middle" aria-hidden="true" />
                                        )}
                                        {!line && '\u00a0'}
                                    </span>
                                </span>
                            ))}
                        </code>
                    </pre>
                ) : (
                    <PhonePreview />
                )}
            </div>
        </section>
    )
}
