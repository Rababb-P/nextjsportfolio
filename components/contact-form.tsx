"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-600/45 md:p-8">
        <div className="absolute inset-0 bg-black/16"></div>

        <div className="relative">
          <div className="mb-6 space-y-3">
            <div className="inline-flex rounded-full border border-emerald-600/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-emerald-600">
              Say Hello
            </div>
            <h3 className="text-2xl font-bold text-emerald-600 md:text-3xl">Send Me a Message</h3>
            <p className="max-w-md text-sm leading-6 text-slate-300">
              If you want to chat about internships, projects, hackathons, or building something fun, I&apos;m happy
              to hear from you.
            </p>
          </div>

          <form
            action="https://formsubmit.co/bae2064e95b84f191637791a97d9ff0b"
            method="POST"
            className="space-y-6"
          >
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="min-h-36 border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/20"
              />
            </div>

            {/* Hidden options for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <Button
              type="submit"
              className="w-full border-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white transition-all duration-300 hover:scale-[1.01] hover:opacity-90"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
