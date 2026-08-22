/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

/**
 * Rolo vertical: as palavras ficam empilhadas dentro de uma janela e o
 * conjunto desliza uma linha por vez. Sem saltos, sem estados presos.
 */
const RotatingText = ({ items = [], interval = 2600, className = '' }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => setIndex(0), [items])

  useEffect(() => {
    if (items.length < 2) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items, interval])

  return (
    <span className={`inline-flex h-[1.6em] overflow-hidden align-bottom ${className}`}>
      <span
        className="flex flex-col transition-transform duration-[550ms] ease-[cubic-bezier(.22,.8,.28,1)] motion-reduce:transition-none"
        style={{ transform: `translateY(-${index * 1.6}em)` }}
      >
        {items.map((item) => (
          <span key={item} className="h-[1.6em] whitespace-nowrap leading-[1.6em]">
            {item}
          </span>
        ))}
      </span>
    </span>
  )
}

export default RotatingText
