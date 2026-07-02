"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=/<>"

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Decodes into its final text one character at a time, cycling random
 * glyphs ahead of the reveal point. Plays once when scrolled into view.
 */
export function ScrambleText({
  text,
  className,
  delay = 0,
  speed = 60,
}: {
  text: string
  className?: string
  delay?: number
  speed?: number
}) {
  const [display, setDisplay] = useState(text)
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number>(0)
  const played = useRef(false)

  const play = useCallback(() => {
    if (played.current) return
    played.current = true

    if (prefersReducedMotion()) {
      setDisplay(text)
      return
    }

    const start = performance.now() + delay
    const step = (now: number) => {
      const elapsed = now - start
      if (elapsed < 0) {
        frameRef.current = requestAnimationFrame(step)
        return
      }
      const revealed = Math.floor(elapsed / speed)
      if (revealed >= text.length) {
        setDisplay(text)
        return
      }
      let out = text.slice(0, revealed)
      for (let i = revealed; i < text.length; i++) {
        out += text[i] === " " ? " " : randomChar()
      }
      setDisplay(out)
      frameRef.current = requestAnimationFrame(step)
    }
    frameRef.current = requestAnimationFrame(step)
  }, [text, delay, speed])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play()
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frameRef.current)
    }
  }, [play])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  )
}

/**
 * Cycles through a list of words, scrambling between each transition.
 */
export function ScrambleCycle({
  words,
  className,
  interval = 2800,
  speed = 45,
}: {
  words: string[]
  className?: string
  interval?: number
  speed?: number
}) {
  const [display, setDisplay] = useState(words[0])
  const frameRef = useRef<number>(0)

  useEffect(() => {
    let idx = 0

    if (prefersReducedMotion()) {
      const id = window.setInterval(() => {
        idx = (idx + 1) % words.length
        setDisplay(words[idx])
      }, interval)
      return () => window.clearInterval(id)
    }

    const scrambleTo = (word: string) => {
      const start = performance.now()
      const step = (now: number) => {
        const revealed = Math.floor((now - start) / speed)
        if (revealed >= word.length) {
          setDisplay(word)
          return
        }
        let out = word.slice(0, revealed)
        for (let i = revealed; i < word.length; i++) {
          out += word[i] === " " ? " " : randomChar()
        }
        setDisplay(out)
        frameRef.current = requestAnimationFrame(step)
      }
      frameRef.current = requestAnimationFrame(step)
    }

    const id = window.setInterval(() => {
      idx = (idx + 1) % words.length
      scrambleTo(words[idx])
    }, interval)

    return () => {
      window.clearInterval(id)
      cancelAnimationFrame(frameRef.current)
    }
  }, [words, interval, speed])

  return <span className={className}>{display}</span>
}
