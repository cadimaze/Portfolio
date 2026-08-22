/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'

/**
 * Malha de pontos gravada na superfície: os pontos perto do ponteiro
 * afundam e clareiam, como se o dedo pressionasse a chapa.
 * Canvas puro — sem dependência, roda só quando o ponteiro se move.
 */
const DotGrid = ({ gap = 26, radius = 170 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -9999, y: -9999 }
    let dots = []
    let raf = 0
    let idle = 0

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots = []
      const cols = Math.ceil(w / gap) + 1
      const rows = Math.ceil(h / gap) + 1
      const offX = (w - (cols - 1) * gap) / 2
      const offY = (h - (rows - 1) * gap) / 2
      for (let i = 0; i < cols; i += 1) {
        for (let j = 0; j < rows; j += 1) {
          dots.push({ x: offX + i * gap, y: offY + j * gap })
        }
      }
    }

    const draw = () => {
      const { innerWidth: w, innerHeight: h } = window
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < dots.length; i += 1) {
        const d = dots[i]
        const dx = d.x - pointer.x
        const dy = d.y - pointer.y
        const dist = Math.hypot(dx, dy)
        const near = dist < radius ? 1 - dist / radius : 0
        const eased = near * near

        // ponto base: sombra escura + realce claro (mesma luz do resto do site)
        const size = 1.15 + eased * 2.1
        ctx.beginPath()
        ctx.arc(d.x + 0.6, d.y + 0.6, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(157,171,196,${0.34 + eased * 0.3})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(d.x - 0.4, d.y - 0.4, size * 0.82, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.55 + eased * 0.4})`
        ctx.fill()

        if (eased > 0.02) {
          ctx.beginPath()
          ctx.arc(d.x, d.y, size * 0.55, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(47,107,255,${eased * 0.5})`
          ctx.fill()
        }
      }
    }

    const loop = () => {
      draw()
      idle -= 1
      if (idle > 0) raf = requestAnimationFrame(loop)
      else raf = 0
    }

    const kick = () => {
      idle = 90 // ~1.5s de animação após o último movimento
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      kick()
    }

    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
      kick()
    }

    const onResize = () => {
      build()
      draw()
    }

    build()
    draw()

    if (!reduced) {
      window.addEventListener('pointermove', onMove, { passive: true })
      window.addEventListener('pointerleave', onLeave)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [gap, radius])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    />
  )
}

export default DotGrid
