/* eslint-disable react/prop-types */

/**
 * Esteira infinita: a lista é duplicada e desliza continuamente,
 * com as pontas apagadas por máscara. Pausa ao passar o mouse.
 */
const Marquee = ({ items, renderItem, speed = 38, className = '' }) => (
  <div
    className={`group relative overflow-hidden ${className}`}
    style={{
      maskImage: 'linear-gradient(90deg, transparent, #000 3%, #000 94%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 3%, #000 94%, transparent)',
    }}
  >
    <div
      className="flex w-max animate-marquee items-center gap-x-10 group-hover:[animation-play-state:paused]"
      style={{ animationDuration: `${speed}s` }}
    >
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center gap-x-10" aria-hidden={copy === 1}>
          {items.map((item, i) => renderItem(item, i))}
        </div>
      ))}
    </div>
  </div>
)

export default Marquee
