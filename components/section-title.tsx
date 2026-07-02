export function SectionTitle({
  index,
  note,
  title,
}: {
  index: string
  note: string
  title: string
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-baseline justify-between border-b border-ink pb-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
          {index} — {note}
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted md:block">
          ///
        </span>
      </div>
      <h2 className="mt-6 text-[clamp(2.4rem,7vw,5.5rem)] font-black uppercase leading-none tracking-[-0.02em]">
        {title}
      </h2>
    </div>
  )
}
