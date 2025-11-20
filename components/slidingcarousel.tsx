"use client"

import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface RotationCarouselProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function SlidingCarousel({ children, speed = 8, className }: RotationCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const firstGroup = container.querySelector(".carousel-group") as HTMLDivElement
    if (!firstGroup) return

    const groupWidth = firstGroup.offsetWidth + 8 // Adding margin between groups

    const animation = gsap.timeline({
      repeat: -1,
    })

    animation
      .to(container, {
        x: -groupWidth,
        duration: speed,
        ease: "none",
      })
      .set(container, { x: 0 }, speed)

    return () => {
      animation.kill()
      gsap.set(container, { x: 0 })
    }
  }, [speed, children])

  return (
    <div className={"relative overflow-hidden " + className}>
      <div ref={containerRef} className="flex flex-row">
        <div className="carousel-group flex space-x-2 mr-2 flex-shrink-0">
          {children}
        </div>
        <div className="flex space-x-2 flex-shrink-0">
          {children}
        </div>
      </div>
    </div>
  )
}
