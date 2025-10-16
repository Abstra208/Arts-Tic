"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface RotationCarouselProps {
  children: React.ReactNode
  speed?: number // Duration in seconds for one complete loop (lower = faster)
  className?: string
}

export function SlidingCarousel({ children, speed = 20, className }: RotationCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const group1Ref = useRef<HTMLDivElement>(null)
  const group2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const group1 = group1Ref.current
    const group2 = group2Ref.current

    if (!container || !group1 || !group2) return

    const groupWidth = group1.offsetWidth

    // Position groups side by side
    gsap.set(group1, { x: 0 })
    gsap.set(group2, { x: groupWidth })

    // Create infinite timeline that moves both groups to the left
    const animation = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        // Reset positions when animation completes one cycle
        gsap.set(group1, { x: 0 })
        gsap.set(group2, { x: groupWidth })
      },
    })

    // Animate both groups to move left by groupWidth
    animation.to([group1, group2], {
      x: `-=${groupWidth}`,
      duration: speed,
      ease: "none",
    })

    return () => {
      animation.kill()
    }
  }, [speed, children])

  return (
    <div className={"relative overflow-hidden " + className}>
      <div ref={containerRef} className="flex">
        <div ref={group1Ref} className="flex">
          {children}
        </div>
        <div ref={group2Ref} className="flex">
          {children}
        </div>
      </div>
    </div>
  )
}
