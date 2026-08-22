/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../../lib/gsap'

/** Deslocamento suave no scroll — profundidade sem exagero. */
const Parallax = ({ children, distance = -50, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (reducedMotion()) return undefined
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: distance,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })
    }, ref)
    return () => ctx.revert()
  }, [distance])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Parallax
