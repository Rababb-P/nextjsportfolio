import Link from "next/link"

import { CountUp } from "@/components/count-up"
import { ExperienceList, type Experience } from "@/components/experience-list"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/marquee"
import { ProjectIndex, type Project } from "@/components/project-index"
import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { SiteHeader } from "@/components/site-header"

const resumeUrl = "https://drive.google.com/file/d/14YLR1ZixK4FxT7ogixuHqiahCWm0ciG7/view?usp=sharing"

const hackathonWins = [
  "Hack Canada — 1st Place ($5,000)",
  "Amazon Robotics — 1st Place",
  "Hack the North — Award Winner",
  "Toronto Raptors Hackathon — 1st Place",
  "UofT RSX Seek Jr — 1st Place",
  "Waterloo Chess Hackathon — 3rd Place",
  "Most Complex AI Hack — Finalist",
]

const projects: Project[] = [
  {
    title: "AI Voice Persona Agent",
    award: "Fine-tuned Whisper · Real-time Voice RAG",
    year: "2026",
    description:
      "A hold-to-talk AI persona of me — Whisper fine-tuned with LoRA and exported to CTranslate2 for real-time int8 transcription, driving a LangGraph agent grounded with RAG over personal data in ChromaDB, with prompt-injection guardrails gated by a CI eval harness.",
    tags: ["PyTorch", "LangGraph", "Whisper", "RAG", "ChromaDB", "HuggingFace"],
    image: "/voiceagent.jpg",
    video: "/voiceagent.mp4",
    repoUrl: "https://github.com/Rababb-P/CustomVoiceAgent",
  },
  {
    title: "Reparo",
    award: "Hack Canada — 1st Place · $5,000",
    year: "2026",
    description:
      "An agentic repair assistant that diagnoses broken household items and one-click checks out exact replacement parts from live Shopify inventory.",
    tags: ["Python", "Agentic AI", "Shopify Storefront API"],
    image: "/reparoimage.jpg",
    demoUrl: "https://devpost.com/software/reparo",
  },
  {
    title: "StudySync",
    award: "Hack the North — Best Use of Auth0",
    year: "2025",
    description:
      "A collaborative AI study platform that turns lip-read videos into notes and quizzes, built during Hack the North and awarded Best Use of Auth0.",
    tags: ["Python", "React", "Auth0", "MongoDB", "OpenAI", "Cohere"],
    image: "/studysync.jpg",
    demoUrl:
      "https://devpost.com/software/studying-with-hack-the-north?ref_content=user-portfolio&ref_feature=in_progress",
    repoUrl: "https://github.com/Rababb-P/StudySync-HTN",
  },
  {
    title: "Smart Bin",
    award: "StarterHacks",
    year: "2024",
    description:
      "A real-world ML and hardware build that classifies recycling versus garbage and physically sorts it using an Arduino-driven mechanism.",
    tags: ["Python", "TensorFlow", "Arduino", "Computer Vision"],
    image: "/aisortnocam.jpg",
    demoUrl: "https://devpost.com/software/smart-bin-owq4am",
    repoUrl: "https://github.com/Rababb-P/SmartBin-StarterHacks2024",
  },
  {
    title: "World Cup Graphs",
    award: "UofT Create — Capstone",
    year: "2024",
    description:
      "An interactive data storytelling site for World Cup statistics with dynamic filtering, graph generation, and a backend data pipeline.",
    tags: ["React", "Python", "SQL", "Matplotlib", "pandas"],
    image: "/fifasite.png",
    repoUrl: "https://github.com/Rababb-P/UofTCreate2024Capstone",
  },
  {
    title: "FRC Learning Site",
    award: "FIRST Robotics — Team 854",
    year: "2025",
    description:
      "A teaching-focused robotics site plus robot programming work for Team 854, created to help newer programmers ramp up faster.",
    tags: ["Java", "WPILIB", "Robotics", "React"],
    image: "/frcpic.png",
    demoUrl: "https://rababb-p.github.io/frccoding/",
    repoUrl: "https://github.com/Rababb-P/2025_Robot",
  },
  {
    title: "Autonomous Rover",
    award: "UofT Seek Jr — 1st Place",
    year: "2024",
    description:
      "A first-place hackathon rover that navigated a maze autonomously, then switched into Bluetooth control to scan barcodes.",
    tags: ["Arduino", "C++", "Sensors", "Autonomy"],
    image: "/seekjrwin.png",
    demoUrl: "https://rsxutoronto.wixsite.com/mysite/seek-jr-2024",
  },
]

const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "BMO — NARP Platforms",
    period: "Jan 2026 — Apr 2026",
    description:
      "Built internal monitoring and file-observability dashboards for TSYS data flows, AWS API and MQ volumes, and SLA risk tracking using Dynatrace and Ansible.",
  },
  {
    title: "Autonomous Software Developer",
    company: "WATonomous",
    period: "Sept 2025 — Present",
    description:
      "Trained reinforcement-learning (locomotion) and imitation-learning (manipulation) policies in Isaac Lab and PyTorch, logging rewards, trajectory error, and failure cases.",
  },
  {
    title: "Full-Stack Developer (AI Specialist)",
    company: "NeedList.org",
    period: "Mar 2026 — Present",
    description:
      "Shipping end-to-end product features for a tech charity startup using TypeScript, NestJS, React, TanStack Query and Router, plus Firebase across auth, data, storage, and cloud functions.",
  },
]

const highlights = [
  {
    title: "Machine Learning",
    text: "Training reinforcement-learning and imitation-learning policies, plus models for object detection, transcription workflows, and applied computer vision.",
  },
  {
    title: "Agentic AI",
    text: "Building agents that plan, call tools, and take real actions — from diagnosing broken hardware to checking out live Shopify inventory.",
  },
  {
    title: "Full-Stack Craft",
    text: "Shipping thoughtful product experiences across React, Next.js, NestJS, Firebase, MongoDB, and AWS.",
  },
]

const stack = [
  {
    label: "Languages",
    items: ["Python", "C++", "TypeScript", "JavaScript", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["PyTorch", "TensorFlow", "NumPy", "pandas", "React", "Next.js", "YOLO", "ROS2"],
  },
  {
    label: "Developer Tools",
    items: ["Supabase", "Git", "Docker", "Node.js", "Linux", "AWS"],
  },
]

const stats = [
  {
    value: 95,
    suffix: "%",
    caption: "YOLOv11 competition object accuracy in the WATonomous pipeline",
  },
  {
    value: 30,
    prefix: "+",
    suffix: "%",
    caption: "Localization accuracy improvement from refined global mapping work",
  },
  {
    value: 60,
    prefix: "−",
    suffix: "%",
    caption: "Manual escalation time reduced through file monitor automation at BMO",
  },
]

const contactRows = [
  { label: "Email", value: "rpannu@uwaterloo.ca", href: "mailto:rpannu@uwaterloo.ca" },
  { label: "Phone", value: "437-388-6319", href: "tel:+14373886319" },
  { label: "Location", value: "Toronto ↔ Waterloo, ON" },
  {
    label: "LinkedIn",
    value: "/in/rababb-pannu ↗",
    href: "https://www.linkedin.com/in/rababb-pannu/",
  },
  { label: "GitHub", value: "@Rababb-P ↗", href: "https://github.com/Rababb-P" },
  { label: "Instagram", value: "@rababb_p ↗", href: "https://instagram.com/rababb_p" },
]

export default function Portfolio() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-paper text-ink">
      <SiteHeader resumeUrl={resumeUrl} />

      <main>
        <Hero resumeUrl={resumeUrl} />

        <Ticker items={hackathonWins} />

        <section id="projects" className="scroll-mt-20 py-20 md:py-28">
          <div className="container">
            <Reveal>
              <SectionTitle index="01" note="Selected Work" title="Projects" />
            </Reveal>
            <Reveal>
              <ProjectIndex projects={projects} />
            </Reveal>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted">
              ↳ Click a row to expand
            </p>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 py-20 md:py-28">
          <div className="container">
            <Reveal>
              <SectionTitle index="02" note="Where I've Worked" title="Experience" />
            </Reveal>
            <ExperienceList items={experiences} />
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 md:py-28">
          <div className="container">
            <Reveal>
              <SectionTitle index="03" note="Capabilities" title="Profile" />
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
              <div>
                {highlights.map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="border-b border-line py-6 first:pt-0">
                      <div className="font-mono text-[11px] text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 text-xl font-extrabold uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-ink-muted">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div>
                {stack.map((group) => (
                  <Reveal key={group.label}>
                    <div className="border-b border-line py-6 first:pt-0">
                      <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                        <span>{group.label}</span>
                        <span>({String(group.items.length).padStart(2, "0")})</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="cursor-crosshair border border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors duration-150 hover:bg-ink hover:text-paper"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-16 md:mt-20">
              <div className="grid border-y border-ink sm:grid-cols-3 sm:divide-x sm:divide-line">
                {stats.map((stat) => (
                  <div key={stat.caption} className="px-1 py-8 sm:px-8 sm:first:pl-1 md:py-10">
                    <CountUp
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-5xl font-black tracking-tight md:text-6xl"
                    />
                    <p className="mt-3 font-mono text-[11px] uppercase leading-5 tracking-[0.15em] text-ink-muted">
                      {stat.caption}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-ink bg-ink py-20 text-paper md:py-28">
          <div className="container">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                04 — Contact
              </span>
            </Reveal>

            <Reveal className="mt-10">
              <a
                href="mailto:rpannu@uwaterloo.ca"
                className="u-link-thick break-all text-[clamp(1.6rem,6vw,4.5rem)] font-black tracking-tight transition-colors hover:text-signal"
              >
                rpannu@uwaterloo.ca
              </a>
            </Reveal>

            <Reveal className="mt-16">
              <div className="border-t border-paper/20">
                {contactRows.map((row) => {
                  const inner = (
                    <>
                      <span className="tracking-[0.25em] text-paper/50">{row.label}</span>
                      <span className="text-right tracking-[0.15em]">{row.value}</span>
                    </>
                  )
                  return row.href ? (
                    <Link
                      key={row.label}
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-baseline justify-between gap-4 border-b border-paper/20 py-4 font-mono text-xs uppercase transition-all duration-200 hover:border-signal hover:pl-2 hover:text-signal"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-paper/20 py-4 font-mono text-xs uppercase"
                    >
                      {inner}
                    </div>
                  )
                })}
              </div>
              <div className="mt-10">
                <Link
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-inverse"
                >
                  Open Résumé ↗
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-paper/20 bg-ink py-6 text-paper">
          <div className="container flex flex-col justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 sm:flex-row sm:items-center">
            <span>© 2026 Rababb Pannu</span>
            <span>Designed &amp; built by hand — no template</span>
            <a href="#top" className="text-paper transition-colors hover:text-signal">
              Back to top ↑
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}
