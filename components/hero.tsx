"use client"

import Link from "next/link"

import { ScrambleCycle, ScrambleText } from "@/components/scramble-text"

const FOCUS_WORDS = ["MACHINE LEARNING", "REINFORCEMENT LEARNING", "FULL-STACK", "AGENTIC AI"]

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Rababb-P" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rababb-pannu/" },
  { label: "Instagram", href: "https://instagram.com/rababb_p" },
  { label: "Email", href: "mailto:rpannu@uwaterloo.ca" },
]

export function Hero({ resumeUrl }: { resumeUrl: string }) {
  return (
    <section className="relative pt-24 md:pt-32">
      <div className="container">
        <div className="flex items-baseline justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
          <span>Portfolio — Edition 2026</span>
          <span className="hidden sm:block">43.4723° N, 80.5449° W</span>
        </div>

        <div className="py-10 md:py-16">
          <h1 className="text-[clamp(3.2rem,13vw,11rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
            <ScrambleText text="RABABB" speed={70} className="block" />
            <span className="block">
              <ScrambleText text="PANNU" speed={70} delay={300} />
              <span className="text-signal">.</span>
            </span>
          </h1>
        </div>

        <div className="grid gap-10 border-t border-line py-10 md:py-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="max-w-md text-base leading-7 text-ink-muted">
              Computer Engineering student at the University of Waterloo, blending machine
              learning, agentic AI, and full-stack product work through experiences at BMO,
              WATonomous, and NeedList.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-brutal btn-brutal-solid">
                Selected Work ↓
              </a>
              <Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal"
              >
                Résumé ↗
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em]">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="u-link text-ink-muted transition-colors hover:text-ink"
                >
                  {s.label} ↗
                </Link>
              ))}
            </div>
          </div>

          <dl className="h-fit divide-y divide-line border-y border-line font-mono text-xs uppercase">
            <div className="grid grid-cols-[110px_1fr] items-baseline gap-4 py-4">
              <dt className="tracking-[0.25em] text-ink-muted">Role</dt>
              <dd className="tracking-[0.1em]">Computer Eng @ UWaterloo</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] items-baseline gap-4 py-4">
              <dt className="tracking-[0.25em] text-ink-muted">Focus</dt>
              <dd className="tracking-[0.1em] text-signal">
                <ScrambleCycle words={FOCUS_WORDS} />
              </dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] items-baseline gap-4 py-4">
              <dt className="tracking-[0.25em] text-ink-muted">Now</dt>
              <dd className="tracking-[0.1em]">NeedList.org · WATonomous</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] items-baseline gap-4 py-4">
              <dt className="tracking-[0.25em] text-ink-muted">Status</dt>
              <dd className="flex items-center gap-2.5 tracking-[0.1em]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-signal opacity-60" />
                  <span className="relative inline-flex h-2 w-2 bg-signal" />
                </span>
                Open to internships
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
