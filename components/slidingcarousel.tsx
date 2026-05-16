"use client"

import React from "react"

interface RotationCarouselProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function SlidingCarousel({ children, speed = 8, className }: RotationCarouselProps) {
  const items = React.Children.toArray(children)

  const renderItem = (child: React.ReactNode, index: number) => {
    if (!React.isValidElement<{ className?: string }>(child)) {
      return child
    }

    const existingClassName = child.props.className ?? ""

    return React.cloneElement(child, {
      className: `h-full w-full object-cover ${existingClassName}`.trim(),
      key: index,
    })
  }

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`.trim()}
      style={{ "--carousel-duration": `${speed}s` } as React.CSSProperties}
    >
      <div className="absolute inset-0 flex w-max will-change-transform animate-carousel">
        <div className="flex flex-none gap-5 pr-5">
          {items.map((child, index) => (
            <div key={index} className="flex-none h-full aspect-square">
              <div className="w-full h-full overflow-hidden rounded-2xl bg-white/70">{renderItem(child, index)}</div>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex flex-none gap-5 pr-5">
          {items.map((child, index) => (
            <div key={index} className="flex-none h-full aspect-square">
              <div className="w-full h-full overflow-hidden rounded-2xl bg-white/70">{renderItem(child, index)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
