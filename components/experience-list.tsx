import { Reveal } from "@/components/reveal"

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <div className="border-t border-ink">
      {items.map((experience, i) => (
        <Reveal key={experience.company}>
          <div className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-paper-raised md:grid-cols-[4rem_240px_1fr] md:gap-6 md:py-10">
            <span className="font-mono text-xs text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em]">
              <div className="font-semibold">{experience.company}</div>
              <div className="mt-1.5 text-ink-muted">{experience.period}</div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                {experience.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-ink-muted">
                {experience.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
