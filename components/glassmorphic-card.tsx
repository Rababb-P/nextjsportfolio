"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { FallingPattern } from "@/components/ui/falling-pattern"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-700/45">
        <FallingPattern
          aria-hidden="true"
          className="absolute inset-0 p-0 opacity-90"
          color="rgba(34, 197, 94, 0.82)"
          backgroundColor="#000000"
          duration={130}
          blurIntensity="0.24rem"
          density={0.88}
        />
        <div className="absolute inset-0 bg-black/16"></div>

        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
