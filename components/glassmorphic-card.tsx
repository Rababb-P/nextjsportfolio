"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

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
      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-600/45">
        <div className="absolute inset-0 bg-black/16"></div>

        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
