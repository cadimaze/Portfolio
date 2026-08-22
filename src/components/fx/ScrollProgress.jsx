import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

/** Fio de progresso da página, preso ao topo — desenhado por scrub do GSAP. */
const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.25 },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        ref={barRef}
        className="h-full w-full origin-left rounded-r-full"
        style={{
          background: 'linear-gradient(90deg, rgba(109,157,255,.9), #2f6bff)',
          boxShadow: '0 1px 10px rgba(47,107,255,.5)',
        }}
      />
    </div>
  )
}

export default ScrollProgress
