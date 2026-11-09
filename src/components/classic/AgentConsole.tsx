"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUp, Check, Loader2 } from "lucide-react";
import { matchRequest, type AgentMatch } from "./agentMatch";
import { contactHref } from "./data";

const examples = ["Our Wi-Fi keeps dropping", "Automate our WhatsApp replies", "We need an inventory system", "Build us a website"];
const steps = ["Reading your request", "Matching it to a service", "Preparing a handoff to the team"];
const STEP_MS = 650;

type Run = { text: string; match: AgentMatch; stage: number };

/** Hero panel: routes a typed problem to a service and hands it to the contact form. */
export default function AgentConsole() {
    const [input, setInput] = useState("");
    const [run, setRun] = useState<Run | null>(null);
    const timers = useRef<number[]>([]);

    const clearTimers = () => {
        timers.current.forEach((t) => window.clearTimeout(t));
        timers.current = [];
    };

    const start = useCallback((raw: string) => {
        const text = raw.trim();
        if (!text) return;
        clearTimers();
        const match = matchRequest(text);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setRun({ text, match, stage: steps.length });
            return;
        }
        setRun({ text, match, stage: 0 });
        for (let i = 1; i <= steps.length; i++) {
            timers.current.push(window.setTimeout(() => setRun((r) => (r ? { ...r, stage: i } : r)), i * STEP_MS));
        }
    }, []);

    // Play one example so first-time visitors can see what the panel does.
    useEffect(() => {
        timers.current.push(window.setTimeout(() => start(examples[1]), 800));
        return clearTimers;
    }, [start]);

    const done = run !== null && run.stage >= steps.length;

    return (
        <div className="min-w-0 rounded-[12px] border border-white/15 bg-c-night-raised text-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]">
            <div className="c-mono flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-[13px]">
                <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-c-mint" />
                    Softecof assistant
                </span>
                <span className="text-c-on-night">Demo</span>
            </div>

            <div className="flex min-h-[292px] flex-col gap-3 p-4">
                {!run && <p className="c-mono m-0 text-[14px] text-c-on-night">Tell me what’s going on with your business tech.</p>}
                {run && (
                    <>
                        <p className="m-0 max-w-[90%] self-end rounded-[10px] bg-white/10 px-3 py-2 text-[15.5px] [overflow-wrap:anywhere]">{run.text}</p>
                        <ul className="c-mono m-0 flex list-none flex-col gap-1.5 p-0 text-[13.5px] text-c-on-night">
                            {steps.map((step, i) =>
                                i > run.stage ? null : (
                                    <li key={step} className="flex items-center gap-2">
                                        {i < run.stage ? (
                                            <Check size={15} strokeWidth={3} className="flex-none text-c-mint" aria-hidden="true" />
                                        ) : (
                                            <Loader2 size={15} className="flex-none animate-spin text-c-mint" aria-hidden="true" />
                                        )}
                                        {step}
                                    </li>
                                ),
                            )}
                        </ul>
                    </>
                )}
                <div aria-live="polite">
                    {done && run && (
                        <div data-agent-result className="rounded-[10px] border border-c-mint/40 p-3.5">
                            <p className="c-mono m-0 text-[12.5px] text-c-mint">Best fit</p>
                            <h3 className="m-0 mt-1 text-[19px] font-semibold leading-[1.25] text-white">{run.match.title}</h3>
                            <p className="m-0 mt-1 text-[15px] leading-[1.45] text-c-on-night">{run.match.desc}</p>
                            <Link href={contactHref(run.match.service, run.text)} className="mt-2.5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-c-peach hover:text-white">
                                Send this to the team
                                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="border-t border-white/10 p-4">
                <ul className="m-0 mb-3 flex list-none flex-wrap gap-2 p-0">
                    {examples.map((ex) => (
                        <li key={ex}>
                            <button
                                type="button"
                                onClick={() => start(ex)}
                                className="min-h-9 cursor-pointer rounded-full border border-white/20 px-3 text-[13.5px] text-c-on-night transition-colors hover:border-c-mint hover:text-white"
                            >
                                {ex}
                            </button>
                        </li>
                    ))}
                </ul>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        start(input);
                        setInput("");
                    }}
                    className="flex gap-2"
                >
                    <label htmlFor="agent-input" className="sr-only">
                        Describe your problem
                    </label>
                    <input
                        id="agent-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        maxLength={300}
                        autoComplete="off"
                        placeholder="Describe your problem…"
                        className="min-h-12 min-w-0 flex-1 rounded-[8px] border border-white/25 bg-c-night px-3 text-[16px] text-white outline-none placeholder:text-c-on-night focus:border-c-mint"
                    />
                    <button type="submit" aria-label="Send" className="flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-[8px] bg-c-peach text-c-night transition-colors hover:bg-white">
                        <ArrowUp size={20} strokeWidth={2.4} aria-hidden="true" />
                    </button>
                </form>
                <p className="m-0 mt-3 text-[13px] leading-[1.45] text-c-on-night">Demo only: it matches keywords in your browser and isn’t a live AI. A person replies to every enquiry.</p>
            </div>
        </div>
    );
}
