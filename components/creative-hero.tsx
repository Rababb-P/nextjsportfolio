"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type CharacterRef = React.RefObject<HTMLDivElement | null>

function TrackingEye({
  size = 18,
  pupilSize = 7,
  maxDistance = 5,
  mouse,
  isBlinking = false,
}: {
  size?: number
  pupilSize?: number
  maxDistance?: number
  mouse: { x: number; y: number }
  isBlinking?: boolean
}) {
  const eyeRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!eyeRef.current || isBlinking) {
      setOffset({ x: 0, y: 0 })
      return
    }

    const eye = eyeRef.current.getBoundingClientRect()
    const centerX = eye.left + eye.width / 2
    const centerY = eye.top + eye.height / 2
    const deltaX = mouse.x - centerX
    const deltaY = mouse.y - centerY
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance)
    const angle = Math.atan2(deltaY, deltaX)

    setOffset({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    })
  }, [mouse, maxDistance, isBlinking])

  return (
    <div
      ref={eyeRef}
      className="flex items-center justify-center rounded-full bg-white transition-all duration-150"
      style={{
        width: size,
        height: isBlinking ? 2 : size,
      }}
    >
      {!isBlinking && (
        <div
          className="rounded-full bg-slate-950 transition-transform duration-100"
          style={{
            width: pupilSize,
            height: pupilSize,
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        />
      )}
    </div>
  )
}

function DotEye({
  mouse,
  parentRef,
  x,
  y,
}: {
  mouse: { x: number; y: number }
  parentRef: CharacterRef
  x: number
  y: number
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!parentRef.current) return

    const rect = parentRef.current.getBoundingClientRect()
    const centerX = rect.left + x
    const centerY = rect.top + y
    const deltaX = mouse.x - centerX
    const deltaY = mouse.y - centerY
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 5)
    const angle = Math.atan2(deltaY, deltaX)

    setOffset({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    })
  }, [mouse, parentRef, x, y])

  return (
    <span
      className="absolute h-3 w-3 rounded-full bg-slate-950 transition-transform duration-100"
      style={{
        left: x,
        top: y,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    />
  )
}

export function CreativeHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [purpleBlinking, setPurpleBlinking] = useState(false)
  const [blackBlinking, setBlackBlinking] = useState(false)
  const purpleRef = useRef<HTMLDivElement>(null)
  const blackRef = useRef<HTMLDivElement>(null)
  const orangeRef = useRef<HTMLDivElement>(null)
  const yellowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const scheduleBlink = (setBlinking: (value: boolean) => void) => {
      const timeout = window.setTimeout(
        () => {
          setBlinking(true)
          window.setTimeout(() => {
            setBlinking(false)
            scheduleBlink(setBlinking)
          }, 150)
        },
        Math.random() * 3500 + 2500
      )

      return timeout
    }

    const purpleTimeout = scheduleBlink(setPurpleBlinking)
    const blackTimeout = scheduleBlink(setBlackBlinking)

    return () => {
      window.clearTimeout(purpleTimeout)
      window.clearTimeout(blackTimeout)
    }
  }, [])

  const getBodySkew = (ref: CharacterRef, amount = 110) => {
    if (!ref.current) return 0
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    return Math.max(-7, Math.min(7, -(mouse.x - centerX) / amount))
  }

  return (
    <motion.div
      className="relative flex h-[300px] w-full max-w-[420px] items-end justify-center sm:h-[380px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute bottom-0 h-48 w-72 rounded-full bg-blue-600/16 blur-3xl" />

      <motion.div
        className="relative h-[260px] w-[360px] sm:h-[340px] sm:w-[460px]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        aria-label="Playful cartoon characters with tracking eyes"
        role="img"
      >
        <div
          ref={purpleRef}
          className="absolute bottom-0 left-[46px] z-[1] w-[112px] rounded-t-lg bg-[#6C3FF5] shadow-2xl shadow-slate-950/35 transition-transform duration-300 sm:left-[58px] sm:w-[150px]"
          style={{
            height: "100%",
            transform: `skewX(${getBodySkew(purpleRef)}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          <div className="absolute left-7 top-9 flex gap-5 sm:left-10 sm:top-11 sm:gap-7">
            <TrackingEye mouse={mouse} isBlinking={purpleBlinking} />
            <TrackingEye mouse={mouse} isBlinking={purpleBlinking} />
          </div>
        </div>

        <div
          ref={blackRef}
          className="absolute bottom-0 left-[158px] z-[2] h-[210px] w-[78px] rounded-t-md bg-[#2D2D2D] shadow-2xl shadow-slate-950/35 transition-transform duration-300 sm:left-[214px] sm:h-[265px] sm:w-[104px]"
          style={{
            transform: `skewX(${getBodySkew(blackRef, 90)}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          <div className="absolute left-4 top-7 flex gap-4 sm:left-6 sm:top-8 sm:gap-5">
            <TrackingEye mouse={mouse} size={16} pupilSize={6} maxDistance={4} isBlinking={blackBlinking} />
            <TrackingEye mouse={mouse} size={16} pupilSize={6} maxDistance={4} isBlinking={blackBlinking} />
          </div>
        </div>

        <div
          ref={orangeRef}
          className="absolute bottom-0 left-0 z-[3] h-[132px] w-[158px] rounded-t-full bg-[#FF9B6B] shadow-2xl shadow-slate-950/35 transition-transform duration-300 sm:h-[176px] sm:w-[210px]"
          style={{
            transform: `skewX(${getBodySkew(orangeRef)}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          <DotEye mouse={mouse} parentRef={orangeRef} x={58} y={72} />
          <DotEye mouse={mouse} parentRef={orangeRef} x={88} y={72} />
        </div>

        <div
          ref={yellowRef}
          className="absolute bottom-0 left-[216px] z-[4] h-[154px] w-[92px] rounded-t-full bg-[#E8D754] shadow-2xl shadow-slate-950/35 transition-transform duration-300 sm:left-[298px] sm:h-[204px] sm:w-[124px]"
          style={{
            transform: `skewX(${getBodySkew(yellowRef)}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          <DotEye mouse={mouse} parentRef={yellowRef} x={34} y={42} />
          <DotEye mouse={mouse} parentRef={yellowRef} x={58} y={42} />
          <span className="absolute left-7 top-[86px] h-1 w-12 rounded-full bg-slate-950 sm:left-9 sm:top-[112px] sm:w-16" />
        </div>
      </motion.div>
    </motion.div>
  )
}
