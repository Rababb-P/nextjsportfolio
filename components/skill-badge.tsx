"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-full overflow-hidden rounded-[24px] border border-white/15 bg-slate-950/35 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/45">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(134,239,172,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.12),transparent_30%)]"></div>

        <div className="relative">
          <div className="mb-4 text-center text-lg font-medium text-emerald-200">{name}</div>

          <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-slate-300">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}
