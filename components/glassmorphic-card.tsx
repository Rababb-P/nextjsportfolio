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
      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/8 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-700/45 hover:bg-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(134,239,172,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_28%)]"></div>
        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-green-700/16 via-emerald-700/14 to-teal-700/16 blur-xl opacity-70 transition duration-700"></div>

        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
