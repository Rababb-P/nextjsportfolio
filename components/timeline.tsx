"use client"

import { motion } from "framer-motion"

import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "BMO - NARP Platforms Tech Team",
    period: "Jan 2026 - Apr 2026",
    description:
      "Built internal monitoring and file-observability dashboards for TSYS data flows, AWS API and MQ volumes, and SLA risk tracking using Dynatrace and Ansible.",
  },
  {
    title: "Autonomous Software Developer",
    company: "WATonomous",
    period: "Sept 2025 - Present",
    description:
      "Built a ROS2 and C++ robot navigation simulation in Foxglove, improved localization accuracy by 30%, and fine-tuned a YOLOv11 model that reached 95% accuracy for competition objects.",
  },
  {
    title: "Part-Time Full-Stack Developer (AI Specialist)",
    company: "NeedList.org",
    period: "Mar 2026 - Present",
    description:
      "Shipping end-to-end product features for a tech charity startup using TypeScript, NestJS, React, TanStack Query and Router, plus Firebase across auth, data, storage, and cloud functions.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-white/15 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-600/45">
              <div className="absolute inset-0 bg-black/16"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-blue-600">{experience.title}</h3>
                <div className="mb-4 text-slate-300">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-slate-200">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
