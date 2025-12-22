"use client"

import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

interface RotationCarouselProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function SlidingCarousel({ children, speed = 8, className }: RotationCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const firstGroup = container.querySelector(".carousel-group") as HTMLDivElement
    if (!firstGroup) return

    const groupWidth = firstGroup.offsetWidth + 8 // Adding margin-right (8px)
    console.log("Group width:", groupWidth)

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
    <div className={`overflow-hidden ${className}`}>
      <div ref={containerRef} className="flex flex-row h-full w-full">
        <div className="carousel-group flex space-x-2 md:space-x-2 mr-2 md:mr-2 shrink-0 h-full w-auto">
          {React.Children.map(children, (child) => (
            <div className="flex w-70 md:w-140">
              {child}
            </div>
          ))}
        </div>
        <div className="flex space-x-2 md:space-x-2 shrink-0 h-full">
          {React.Children.map(children, (child) => (
            <div className="flex w-70 md:w-140">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
