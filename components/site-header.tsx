"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const NAV = [
  { index: "01", label: "Work", href: "#projects", id: "projects" },
  { index: "02", label: "Experience", href: "#experience", id: "experience" },
  { index: "03", label: "Profile", href: "#about", id: "about" },
  { index: "04", label: "Contact", href: "#contact", id: "contact" },
]

export function SiteHeader({ resumeUrl }: { resumeUrl: string }) {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-CA", {
          hour12: false,
          timeZone: "America/Toronto",
        }),
      )
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative border-b bg-paper transition-colors duration-300 ${
          scrolled || open ? "border-line" : "border-transparent"
        }`}
      >
        <div className="container flex h-14 items-center justify-between md:h-16">
          <Link
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.3em]"
          >
            <span className="block h-2.5 w-2.5 bg-signal transition-transform duration-300 group-hover:rotate-45" />
            Rababb Pannu
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                  active === item.id ? "text-signal" : "text-ink-muted hover:text-ink"
                }`}
              >
                <span className="mr-1.5 align-top text-[9px]">{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <span
              suppressHydrationWarning
              className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-ink-muted"
            >
              TOR {time || "--:--:--"}
            </span>
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Résumé ↗
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <span
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-signal"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 -z-10 flex flex-col bg-paper px-5 pb-8 pt-24 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col">
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
              className={`flex items-baseline gap-4 border-b border-line py-5 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="font-mono text-xs text-signal">{item.index}</span>
              <span className="text-4xl font-black uppercase tracking-tight">{item.label}</span>
            </a>
          ))}
        </nav>
        <div
          style={{ transitionDelay: open ? "420ms" : "0ms" }}
          className={`mt-auto flex items-center justify-between transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-brutal btn-brutal-solid"
          >
            Résumé ↗
          </Link>
          <span suppressHydrationWarning className="font-mono text-[11px] tracking-[0.2em] text-ink-muted">
            TOR {time || "--:--:--"}
          </span>
        </div>
      </div>
    </header>
  )
}
