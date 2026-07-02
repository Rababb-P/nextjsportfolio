"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export interface Project {
  title: string
  award?: string
  year: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  repoUrl?: string
}

export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [finePointer, setFinePointer] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const hovering = useRef(false)
  const rafId = useRef(0)

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches)
  }, [])

  useEffect(() => {
    if (hoverIndex === null || !finePointer) return
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.14
      current.current.y += (target.current.y - current.current.y) * 0.14
      const el = previewRef.current
      if (el) {
        const dx = target.current.x - current.current.x
        const rot = Math.max(-7, Math.min(7, dx * 0.06))
        el.style.transform = `translate(${current.current.x}px, ${current.current.y}px) rotate(${rot}deg)`
      }
      rafId.current = requestAnimationFrame(loop)
    }
    rafId.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId.current)
  }, [hoverIndex, finePointer])

  const onMouseMove = (e: React.MouseEvent) => {
    target.current = { x: e.clientX + 28, y: e.clientY - 110 }
    // Snap into place on first entry so the card doesn't fly across the page
    if (!hovering.current) {
      current.current = { ...target.current }
      hovering.current = true
    }
  }

  const showPreview = finePointer && hoverIndex !== null && openIndex !== hoverIndex
  const preview = projects[previewIndex]

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        setHoverIndex(null)
        hovering.current = false
      }}
      className="relative border-t border-ink"
    >
      {projects.map((project, i) => {
        const open = openIndex === i
        return (
          <article key={project.title} className="border-b border-line">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              onMouseEnter={() => {
                setHoverIndex(i)
                setPreviewIndex(i)
              }}
              className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 py-6 text-left md:grid-cols-[4rem_1fr_auto_3rem] md:gap-6 md:py-8"
            >
              <span className="font-mono text-xs text-signal md:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className={`block text-2xl font-extrabold uppercase leading-tight tracking-tight transition-transform duration-300 md:text-4xl ${
                    open ? "" : "group-hover:translate-x-2"
                  }`}
                >
                  {project.title}
                </span>
                {project.award && (
                  <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted md:text-[11px]">
                    {project.award}
                  </span>
                )}
              </span>
              <span className="hidden font-mono text-xs text-ink-muted md:block">
                {project.year}
              </span>
              <span
                className={`justify-self-end text-2xl font-light leading-none transition-transform duration-300 ${
                  open ? "rotate-45 text-signal" : "text-ink-muted group-hover:text-ink"
                }`}
              >
                +
              </span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 pb-8 md:grid-cols-[1fr_340px] md:gap-12 md:pb-10 md:pl-[5.5rem]">
                  <div>
                    <p className="max-w-xl text-base leading-7 text-ink-muted">
                      {project.description}
                    </p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em]">
                      {project.tags.join(" / ")}
                    </p>
                    <div className="mt-7 flex gap-7 font-mono text-xs uppercase tracking-[0.2em]">
                      {project.demoUrl && (
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="u-link text-signal"
                        >
                          Live Demo ↗
                        </Link>
                      )}
                      {project.repoUrl && (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="u-link"
                        >
                          Source ↗
                        </Link>
                      )}
                    </div>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full max-w-[340px] border border-ink object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        )
      })}

      {/* Cursor-following preview card (desktop only) */}
      {finePointer && (
        <div
          ref={previewRef}
          aria-hidden
          className={`pointer-events-none fixed left-0 top-0 z-40 w-[280px] transition-opacity duration-200 ${
            showPreview ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="border border-ink bg-paper p-1.5 shadow-[6px_6px_0_0_rgba(28,26,21,0.9)]">
            <img src={preview.image} alt="" className="aspect-[4/3] w-full object-cover" />
            <div className="flex items-baseline justify-between px-1 pb-0.5 pt-1.5 font-mono text-[9px] uppercase tracking-[0.2em]">
              <span>Fig. {String(previewIndex + 1).padStart(2, "0")}</span>
              <span>{preview.year}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
