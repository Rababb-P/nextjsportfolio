"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          <div className="relative mb-2 rounded-full border border-emerald-700/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-emerald-200 backdrop-blur-sm">
            <span className="relative z-10">{subtitle}</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-700/22 via-emerald-700/18 to-teal-700/22 animate-pulse"></span>
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
