/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------
   Primitivas de material do design system "Soft Machine".
   Tudo nasce da mesma superfície: extrudado (raised) ou entalhado
   (sunken), com a luz sempre vindo do canto superior esquerdo.
------------------------------------------------------------------- */

const isCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Card com inclinação 3D: acompanha o ponteiro e ganha um reflexo
 * especular no ponto onde o "vidro" pegaria a luz. Desligado em telas
 * de toque e quando o usuário pede menos movimento.
 */
export const Tilt = ({ children, className = '', max = 9, lift = 6, as: Tag = 'div', ...rest }) => {
  const ref = useRef(null)
  const frame = useRef(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!isCoarsePointer() && !prefersReducedMotion())
  }, [])

  const handleMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return
      const el = ref.current
      cancelAnimationFrame(frame.current)
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty('--ry', `${(px - 0.5) * 2 * max}deg`)
        el.style.setProperty('--rx', `${(0.5 - py) * 2 * max}deg`)
        el.style.setProperty('--mx', `${px * 100}%`)
        el.style.setProperty('--my', `${py * 100}%`)
        el.style.setProperty('--lift', `${lift}px`)
        el.dataset.active = 'true'
      })
    },
    [enabled, max, lift],
  )

  const handleLeave = useCallback(() => {
    if (!ref.current) return
    cancelAnimationFrame(frame.current)
    const el = ref.current
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--lift', '0px')
    el.dataset.active = 'false'
  }, [])

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  return (
    <div className="tilt-scene h-full">
      <Tag
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={`tilt h-full ${className}`}
        {...rest}
      >
        <div className="h-full">{children}</div>
      </Tag>
    </div>
  )
}

export const Card = ({ children, className = '', tilt = false, ...rest }) => {
  if (tilt) {
    return (
      <Tilt className={`raised ${className}`} {...rest}>
        {children}
      </Tilt>
    )
  }
  return (
    <div className={`raised ${className}`} {...rest}>
      {children}
    </div>
  )
}

export const Button = ({ children, variant = 'primary', className = '', icon, ...rest }) => {
  const base =
    'pressable inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold tracking-tight select-none'
  const styles =
    variant === 'primary'
      ? 'btn-accent text-white'
      : 'raised-sm text-ink hover:text-accent'

  return (
    <button type="button" className={`${base} ${styles} ${className}`} {...rest}>
      {icon}
      {children}
    </button>
  )
}

export const Tag = ({ children }) => (
  <span className="sunken-sm rounded-xl px-3 py-1.5 font-mono text-[11px] font-medium text-muted">
    {children}
  </span>
)

export const Dot = ({ className = '' }) => (
  <span className={`led inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500 ${className}`} />
)

/** Ícone extrudado da superfície — usado como "botão físico" decorativo. */
export const IconTile = ({ children, className = '', size = 'md' }) => {
  const dims = size === 'sm' ? 'h-10 w-10 text-base rounded-xl' : 'h-12 w-12 text-xl rounded-2xl'
  return (
    <span
      className={`raised-sm grid shrink-0 place-items-center text-accent ${dims} ${className}`}
    >
      {children}
    </span>
  )
}

export const Stat = ({ value, label, className = '' }) => (
  <div className={`raised-sm min-w-[132px] flex-1 rounded-2xl px-5 py-4 ${className}`}>
    <b className="block text-[28px] font-extrabold leading-none tracking-tighter text-ink">
      {value}
    </b>
    <small className="mt-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted">
      {label}
    </small>
  </div>
)

/** Cabeçalho de seção: número entalhado + título + meta à direita. */
export const SectionHeader = ({ num, title, subtitle, meta }) => (
  <div className="mb-8">
    <div className="flex flex-wrap items-center gap-4">
      <span className="sunken grid h-11 w-11 place-items-center rounded-2xl font-mono text-xs font-bold text-accent">
        {num}
      </span>
      <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-[28px]">{title}</h2>
      {meta && (
        <span className="ml-auto font-mono text-xs font-medium text-muted">{meta}</span>
      )}
    </div>
    {subtitle && (
      <p className="mt-4 max-w-[620px] text-sm leading-7 text-muted md:text-[15px]">{subtitle}</p>
    )}
  </div>
)

/** Container padrão de seção. */
export const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`mx-auto w-full max-w-[1180px] scroll-mt-28 px-5 py-16 sm:px-6 md:px-8 md:py-24 ${className}`}>
    {children}
  </section>
)
