import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Brain,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { AuroraBackground } from "@/components/ui/aurora-background"

const resumeUrl = "https://drive.google.com/file/d/14YLR1ZixK4FxT7ogixuHqiahCWm0ciG7/view?usp=sharing"

const resumeSkills = [
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

const hackathonWins = [
  "Hack Canada 1st Place Reactiv ($5000) + Most Complex AI Hack Finalist",
  "Amazon Robotics 1st Place",
  "Hack the North Award Winner",
  "UofT RSX SEEK JR 1st Place",
  "Waterloo Chess Hackathon 3rd Place",
  "Toronto Raptors Hackathon 1st Place",
]

const projects = [
  {
    title: "Reparo - Hack Canada Winner",
    description:
      "An agentic repair assistant that diagnoses broken household items and one-click checks out exact replacement parts from live Shopify inventory.",
    tags: ["Python", "Agentic AI", "Shopify Storefront API"],
    image: "/reparoimage.jpg?height=400&width=600",
    demoUrl: "https://devpost.com/software/reparo",
  },
  {
    title: "StudySync - Hack The North Winner",
    description:
      "A collaborative AI study platform that turns lip-read videos into notes and quizzes, built during Hack the North and awarded Best Use of Auth0.",
    tags: ["Python", "React", "Auth0", "MongoDB", "OpenAI", "Cohere"],
    image: "/studysync.jpg?height=400&width=600",
    demoUrl:
      "https://devpost.com/software/studying-with-hack-the-north?ref_content=user-portfolio&ref_feature=in_progress",
    repoUrl: "https://github.com/Rababb-P/StudySync-HTN",
  },
  {
    title: "Smart Bin - StarterHacks",
    description:
      "A real-world ML and hardware build that classifies recycling versus garbage and physically sorts it using an Arduino-driven mechanism.",
    tags: ["Python", "TensorFlow", "Arduino", "Computer Vision"],
    image: "/aisortnocam.jpg?height=400&width=600",
    demoUrl: "https://devpost.com/software/smart-bin-owq4am",
    repoUrl: "https://github.com/Rababb-P/SmartBin-StarterHacks2024",
  },
  {
    title: "FIFA World Cup Graphs Site",
    description:
      "An interactive data storytelling site for World Cup statistics with dynamic filtering, graph generation, and a backend data pipeline.",
    tags: ["React", "Python", "SQL", "Matplotlib", "pandas"],
    image: "/fifasite.png?height=400&width=400",
    repoUrl: "https://github.com/Rababb-P/UofTCreate2024Capstone",
  },
  {
    title: "FIRST Robotics Learning Site",
    description:
      "A teaching-focused robotics site plus robot programming work for Team 854, created to help newer programmers ramp up faster.",
    tags: ["Java", "WPILIB", "Robotics", "React"],
    image: "/frcpic.png?height=400&width=600",
    demoUrl: "https://rababb-p.github.io/frccoding/",
    repoUrl: "https://github.com/Rababb-P/2025_Robot",
  },
  {
    title: "Autonomous Rover - UofT SEEK JR Winner",
    description:
      "A first-place hackathon rover that navigated a maze autonomously, then switched into Bluetooth control to scan barcodes.",
    tags: ["Arduino", "C++", "Sensors", "Autonomy"],
    image: "/seekjrwin.png?height=400&width=600",
    demoUrl: "https://rsxutoronto.wixsite.com/mysite/seek-jr-2024",
  },
]

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    text: "Training and integrating models for object detection, transcription workflows, and applied computer vision.",
  },
  {
    icon: Bot,
    title: "Robotics",
    text: "Building autonomous systems with ROS2, C++, Arduino, hardware integration, and simulation tooling.",
  },
  {
    icon: Sparkles,
    title: "Full-Stack Craft",
    text: "Shipping thoughtful product experiences across React, Next.js, NestJS, Firebase, MongoDB, and AWS.",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <ScrollProgress />
      <FloatingNav />

      <div className="dark">
        <AuroraBackground className="bg-slate-950 text-white">
          <section className="relative flex min-h-svh w-full items-center justify-center overflow-x-clip px-4 pb-16 pt-28 md:py-24">
            <div className="container relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-emerald-200 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                  Marvel Rivals Player at Heart
                </div>
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                    Rababb Pannu,
                    <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {" "}
                      hackathon enthusiast,
                    </span>
                  </h1>
                  <p className="max-w-[650px] text-base leading-7 text-slate-200 sm:text-lg md:text-xl md:leading-8">
                    I&apos;m a Computer Engineering student at the University of Waterloo, currently blending machine
                    learning, robotics, and full-stack product work through experiences at BMO, WATonomous, and
                    NeedList.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#projects" scroll={true}>
                    <Button className="border-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white hover:opacity-90">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-white/15 bg-white/5 text-slate-100 hover:border-white/25 hover:bg-white/10"
                    asChild
                  >
                    <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      Resume
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link href="https://github.com/Rababb-P" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/8 text-slate-200 hover:bg-white/12"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/rababb-pannu/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/8 text-slate-200 hover:bg-white/12"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://instagram.com/rababb_p" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/8 text-slate-200 hover:bg-white/12"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="mailto:rpannu@uwaterloo.ca">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/8 text-slate-200 hover:bg-white/12"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <CreativeHero />
              </div>
            </div>
          </section>
        </AuroraBackground>
      </div>

      <section id="about" className="relative px-4 py-28">
        <div className="container relative z-10">
          <SectionHeading title="Quick Overview" subtitle="How I like to build" />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-6">
              {highlights.map((item) => (
                <GlassmorphicCard key={item.title}>
                  <item.icon className="mb-4 h-8 w-8 text-emerald-500" />
                  <h3 className="mb-2 text-xl font-semibold text-emerald-200">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-200">{item.text}</p>
                </GlassmorphicCard>
              ))}
            </div>

            <div className="grid gap-6">
              <GlassmorphicCard>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-slate-300">Resume Skills</div>
                    <h3 className="mt-2 text-3xl font-semibold text-emerald-200">My current stack</h3>
                  </div>

                  {resumeSkills.map((group) => (
                    <div key={group.label} className="space-y-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                        {group.label}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <Trophy className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>

                      <h3 className="mt-1 text-2xl font-semibold text-emerald-200">Hackathon Wins</h3>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {hackathonWins.map((win) => (
                      <div
                        key={win}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                      >
                        {win}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-4 py-28">
        <div className="container relative z-10">
          <SectionHeading title="Featured Builds" subtitle="Projects from hackathons, robotics, AI, and product work" />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative px-4 py-28">
        <div className="container relative z-10">
          <SectionHeading title="Experience Timeline" subtitle="Internships + Design Teams" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-10">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <GlassmorphicCard>
              <div className="text-4xl font-bold text-emerald-300">95%</div>
              <p className="mt-3 text-slate-200">YOLOv11 competition object accuracy in the WATonomous pipeline.</p>
            </GlassmorphicCard>
            <GlassmorphicCard>
              <div className="text-4xl font-bold text-emerald-300">30%</div>
              <p className="mt-3 text-slate-200">Localization accuracy improvement from refined global mapping work.</p>
            </GlassmorphicCard>
            <GlassmorphicCard>
              <div className="text-4xl font-bold text-emerald-300">60%</div>
              <p className="mt-3 text-slate-200">Manual escalation time reduced through file monitor automation at BMO.</p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-4 py-28">
        <div className="container relative z-10">
          <SectionHeading title="Let&apos;s Make Something" subtitle="Open to opportunities and collaborations" />

          <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <GlassmorphicCard>
              <h3 className="mb-6 text-2xl font-bold text-emerald-200">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">University Email</div>
                    <div className="font-medium text-white">rpannu@uwaterloo.ca</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">Phone</div>
                    <div className="font-medium text-white">437-388-6319</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">Base</div>
                    <div className="font-medium text-white">Toronto and Waterloo, Ontario</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Linkedin className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">LinkedIn</div>
                    <div className="font-medium text-white">linkedin.com/in/rababb-pannu</div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="border-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white hover:opacity-90" asChild>
                    <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      Open Resume on Drive
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="px-4 py-10">
        <div className="container flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/10 bg-slate-950/35 px-6 py-8 text-center backdrop-blur-xl md:flex-row md:text-left">
          <div className="text-slate-300">@ 2026 Rababb Pannu</div>
          <div className="flex gap-6">
            <Link href="https://github.com/Rababb-P" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-slate-300 transition hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/rababb-pannu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-slate-300 transition hover:text-white" />
            </Link>
            <Link href="https://instagram.com/rababb_p" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-slate-300 transition hover:text-white" />
            </Link>
            <Link href="mailto:rpannu@uwaterloo.ca" aria-label="Email">
              <Mail className="h-6 w-6 text-slate-300 transition hover:text-white" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
