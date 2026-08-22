/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from 'react'

/** O elemento é atraído pelo ponteiro, como um ímã sob a superfície. */
const Magnetic = ({ children, strength = 0.32, className = '' }) => {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(
      !window.matchMedia('(pointer: coarse)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
  }, [])

  const onMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [enabled, strength],
  )

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }, [])

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-block transition-transform duration-500 ease-[cubic-bezier(.22,.8,.28,1)] ${className}`}
    >
      {children}
    </span>
  )
}

export default Magnetic
