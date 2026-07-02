export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6">{item}</span>
          <span className="text-signal">✦</span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`group overflow-hidden border-y border-ink bg-ink py-3 font-mono text-xs uppercase tracking-[0.25em] text-paper ${className}`}
    >
      <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
