import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Computer Engineer & Full Stack Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-green-700/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">
                Rababb Pannu
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I'm a Computer Engineering student at the University of Waterloo with a passion for full stack development and robotics.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects" scroll={true}>
                <Button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-700 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                asChild
              >
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/Rababb-P" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rababb-pannu/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://instagram.com/rababb_p" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="mailto:rababb.s.pannu@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-400/20 to-green-700/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/websitepfp.jpg?height=600&width=600"
                  alt="Rababb Pannu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate computer engineer with experience in creating full stack web applications. I
                  specialize in frontend development with React and Next.js, but I'm also comfortable working with
                  backend technologies.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech started in robotics, as my high schools head of programming for FIRST Robotics. I've since expanded my horizons to full stack web development, PCB design and robotics programming.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me playing ball hockey, studying for my computer engineering classes at the University of Waterloo and keeping up with the latest technologies.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Rababb Pannu</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">rababb.s.pannu@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Toronto</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white" asChild>
                    <Link
                      href="https://drive.google.com/file/d/14YLR1ZixK4FxT7ogixuHqiahCWm0ciG7/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="React" level={95} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Arduino" level={80} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="PCB Design" level={75} />
            <SkillBadge name="SQL" level={70} />
            <SkillBadge name="AWS" level={80} />
            <SkillBadge name="Python" level={90} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Hack the North 2025 Award Winner"
              description="A full-stack collaborative site to lip read videos and create notes and quizzes based off content read."
              tags={["React", "Symphonic Labs' API", "OpenAI API", "Auth0", "MongoDB", "Cohere API"]}
              image="/studysync.jpg?height=400&width=600"
              demoUrl="https://devpost.com/software/studying-with-hack-the-north?ref_content=user-portfolio&ref_feature=in_progress"
              repoUrl="https://github.com/Rababb-P/StudySync-HTN"
            />
            <ProjectCard
              title="AI Garbage and Recycling Sorter"
              description="Waste bin that identifies garbage and recycling using a custom trained AI model and sorts them into seperate bins."
              tags={["Arduino", "Python", "Tensorflow"]}
              image="/aisortnocam.jpg?height=400&width=600"
              demoUrl="https://devpost.com/software/smart-bin-owq4am"
              repoUrl="https://github.com/Rababb-P/SmartBin-StarterHacks2024"
            />
            <ProjectCard
              title="FIFA World Cup Stats On Graphs"
              description="A website that uses data from FIFA's 2022 world cup to create graphs analysing teams and their playstyles."
              tags={["React", "SQL", "MatPlotLib", "Python"]}
              image="/fifasite.png?height=400&width=400"
              repoUrl="https://github.com/Rababb-P/UofTCreate2024Capstone"
            />
            <ProjectCard
              title="Team 854 Iron Bears First Robotics Robot and Learning Site"
              description="In 2025, I was the head of programming for Team 854, I programmed our robot and created a website for new programmers to learn on."
              tags={["Java", "WPILIB", "Robotics", "React"]}
              image="/frcpic.png?height=400&width=600"
              demoUrl="https://rababb-p.github.io/frccoding/"
              repoUrl="https://github.com/Rababb-P/2025_Robot"
            />
            <ProjectCard
              title="UofT Seek Jr 2024 1st Place"
              description="My team and I obtained first place in this hackathon by creating and programming an Arduino controlled rover to autonomously navigate a maze and then scan barcodes while under Bluetooth control."
              tags={["Arduino", "C++"]}
              image="/seekjrwin.png?height=400&width=600"
              demoUrl="https://rsxutoronto.wixsite.com/mysite/seek-jr-2024"
            />
            <ProjectCard
              title="School Newspaper Website"
              description="Editor-in-Chief (President) of my school's newspaper from September 2023 to June 2025 and worked with our web team to create a React website to digitize our articles."
              tags={["React", "Tailwind CSS", "Framer Motion"]}
              image="/beaconweb.png?height=400&width=600"
              demoUrl="https://martingrovebeacon.com"
              repoUrl="https://github.com/Rababb-P/beaconfinal"
            />
            <ProjectCard
              title="E-commerce Website to sell digital signatures"
              description="Created a React website to sell digital signatures. Used Stripe to collect payment and used Supabase to store buyer information to create their signature."
              tags={["Stripe", "Supabase", "React"]}
              image="/siglab.png?height=400&width=600"
              demoUrl="https://thesignaturelab.com/"
              repoUrl="https://github.com/Rababb-P/thesignaturelab"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">rababb.s.pannu@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/rababb-pannu</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/Rababb-P</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Instagram</div>
                    <div className="font-medium">instagram.com/rababb_p</div>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-10 mt-32">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500">&copy; {new Date().getFullYear()} Rababb Pannu. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="https://github.com/Rababb-P" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-zinc-500 hover:text-white transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/rababb-pannu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-zinc-500 hover:text-white transition" />
            </Link>
            <Link href="https://instagram.com/rababb_p" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-zinc-500 hover:text-white transition" />
            </Link>
            <Link href="mailto:rababb.s.pannu@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6 text-zinc-500 hover:text-white transition" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
