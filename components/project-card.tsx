"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FallingPattern } from "@/components/ui/falling-pattern"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string        // now optional
  repoUrl?: string        // now optional
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className="relative h-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/45"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FallingPattern
          aria-hidden="true"
          className="absolute inset-0 p-0 opacity-90"
          color="rgba(34, 197, 94, 0.82)"
          backgroundColor="#000000"
          duration={150}
          blurIntensity="0.24rem"
          density={0.88}
        />
        <div className="absolute inset-0 bg-black/14"></div>

        <div className="relative h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-emerald-800/24 via-transparent to-teal-800/28 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          {/* Text */}
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="mb-2 text-xl font-bold text-emerald-200">{title}</h3>
            <p className="mb-4 text-slate-300">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="border border-white/10 bg-white/8 text-slate-200 hover:bg-white/15"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Buttons */}
            {(repoUrl || demoUrl) && (
              <div className="mt-auto flex gap-2 border-t border-white/10 pt-4">
                {repoUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-200 hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {demoUrl && (
                  <Button
                    size="sm"
                    className="border-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white hover:opacity-90"
                    asChild
                  >
                    <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Status dot */}
          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${
                isHovered ? "bg-emerald-700" : "bg-slate-500"
              } transition-colors duration-300`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
