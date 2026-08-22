/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../../lib/gsap'

/**
 * Entrada em cascata dos filhos diretos, disparada por ScrollTrigger.
 * Usa batch para que cards que entram juntos animem juntos.
 */
const GsapStagger = ({ children, className = '', selector = ':scope > *', y = 34, stagger = 0.08 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return undefined
    const targets = Array.from(root.querySelectorAll(selector))
    if (!targets.length) return undefined

    if (reducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: { trigger: root, start: 'top 82%', once: true },
      })
    }, root)

    return () => ctx.revert()
  }, [selector, y, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default GsapStagger
