import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
        404 — Page Not Found
      </span>
      <h1 className="mt-4 text-[clamp(2.5rem,8vw,5rem)] font-black uppercase leading-none tracking-tight">
        Nothing Here<span className="text-signal">.</span>
      </h1>
      <Link href="/" className="btn-brutal mt-10">
        Back Home
      </Link>
    </div>
  )
}
