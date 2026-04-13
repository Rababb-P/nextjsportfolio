"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const shouldShowNav = !isMobile || isVisible || isOpen

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 ${shouldShowNav ? "" : "pointer-events-none"}`}
        initial={{ y: -24, opacity: 0, scale: 0.96 }}
        animate={{
          y: shouldShowNav ? 0 : -24,
          opacity: shouldShowNav ? 1 : 0,
          scale: shouldShowNav ? 1 : 0.96,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative min-w-[280px] rounded-full border border-white/15 bg-slate-950/60 px-4 py-3 shadow-lg backdrop-blur-md md:min-w-0">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-700/24 via-emerald-700/24 to-teal-700/24 blur opacity-60"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between gap-4">
              <Link href="/" className="font-bold text-lg">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Rababb</span>
                <span className="text-white">Pannu</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen((open) => !open)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Rababb</span>
                <span className="text-white">Pannu</span>
              </Link>
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.18 }}
                >
                  <Link
                    href={item.href}
                    className="rounded-full px-3 py-1 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/8 hover:text-white"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Button
                size="sm"
                className="ml-2 border-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                asChild
              >
                <Link
                  href="https://drive.google.com/file/d/14YLR1ZixK4FxT7ogixuHqiahCWm0ciG7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center"
              initial={{ y: 16, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0.8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.24, delay: 0.04 * index }}
                >
                  <Link
                    href={item.href}
                    className="block px-8 py-4 text-2xl font-medium text-white transition-colors hover:text-emerald-500"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.24, delay: 0.2 }}
              >
                <Button
                  className="mt-6 border-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                  asChild
                >
                  <Link
                    href="https://drive.google.com/file/d/14YLR1ZixK4FxT7ogixuHqiahCWm0ciG7/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
