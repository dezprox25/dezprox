
'use client'
import { useSmoothScroll } from '@/app/hooks/use-smooth-scroll'
import { ReactLenis } from '@studio-freight/react-lenis'
import React from 'react'

interface SmoothScrollingProps {
  children: React.ReactNode
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  const { smoothScroll } = useSmoothScroll()
  
  // Ensure children is rendered as a ReactElement
  const renderedChildren = React.isValidElement(children) ? children : <>{children}</>
  
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: smoothScroll }}>
      {renderedChildren}
    </ReactLenis>
  )
}

export default SmoothScrolling