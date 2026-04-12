"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function CreativeHero() {
  const orbitBadges = [
    { label: "ML enthusiast", className: "left-0 top-16" },
    { label: "robot programmer", className: "right-2 top-10" },
    { label: "full-stack builder", className: "bottom-10 left-10" },
    { label: "Waterloo engineer", className: "bottom-20 right-0" },
  ]

  return (
    <motion.div
      className="relative h-[420px] w-full md:h-[520px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <div className="absolute left-10 top-8 h-24 w-24 rounded-full bg-green-300/20 blur-2xl" />
        <div className="absolute right-6 top-24 h-28 w-28 rounded-full bg-emerald-300/20 blur-2xl" />
        <div className="absolute bottom-6 left-1/3 h-24 w-24 rounded-full bg-teal-300/20 blur-2xl" />
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-xl md:h-[400px] md:w-[400px]">
          <div className="absolute inset-5 rounded-full border border-dashed border-green-200/30" />
          <div className="absolute inset-10 rounded-full border border-dashed border-teal-200/20" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(134,239,172,0.16),transparent_36%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.14),transparent_30%)]" />

          {orbitBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className={`absolute rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-xs uppercase tracking-[0.25em] text-green-100 shadow-lg shadow-slate-950/30 ${badge.className}`}
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              {badge.label}
            </motion.div>
          ))}

          <motion.div
            className="relative h-48 w-48 overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 md:h-56 md:w-56"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(134,239,172,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_30%)]" />
            <Image
              src="/websitepfp.jpg"
              alt="Rababb Pannu portrait"
              fill
              className="rounded-[28px] object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
