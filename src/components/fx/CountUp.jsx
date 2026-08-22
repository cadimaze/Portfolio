/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

/** Contador que sobe até o valor quando entra na viewport. */
const CountUp = ({ value, suffix = '', duration = 1100, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value)
      return undefined
    }
    let raf = 0
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - p) ** 3
      setShown(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {shown}
      {suffix}
    </span>
  )
}

export default CountUp
