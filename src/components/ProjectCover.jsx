/* eslint-disable react/prop-types */

/**
 * Capas desenhadas à mão (SVG/CSS) para cada projeto — nada de emoji
 * ou imagem genérica: cada capa representa o que o produto faz.
 */

const Frame = ({ children }) => (
  <div className="sunken relative h-[178px] overflow-hidden rounded-2xl">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.55]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(157,171,196,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(157,171,196,.18) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
    <div className="relative flex h-full w-full items-center justify-center p-5">{children}</div>
  </div>
)

/* CRUD Lab — uma tabela sendo manipulada em tempo real */
const CrudCover = () => (
  <div className="w-full max-w-[240px]">
    <div className="mb-2.5 flex gap-1.5">
      {['C', 'R', 'U', 'D'].map((op, i) => (
        <span
          key={op}
          className={`grid h-6 w-6 place-items-center rounded-lg font-mono text-[10px] font-bold ${
            i === 2 ? 'btn-accent text-white' : 'raised-sm text-muted'
          }`}
        >
          {op}
        </span>
      ))}
    </div>
    <div className="raised-sm overflow-hidden rounded-xl p-2">
      {[0, 1, 2, 3].map((row) => (
        <div
          key={row}
          className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
            row === 2 ? 'bg-accent-wash' : ''
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${row === 2 ? 'bg-accent' : 'bg-muted/40'}`}
          />
          <span
            className="h-1.5 rounded-full bg-muted/25"
            style={{ width: `${[54, 40, 62, 34][row]}%` }}
          />
          <span className="ml-auto h-1.5 w-6 rounded-full bg-muted/20" />
        </div>
      ))}
    </div>
  </div>
)

/* Hive — colmeia + o gráfico do controle financeiro */
const HiveCover = () => (
  <svg viewBox="0 0 220 120" className="h-full w-full" role="img" aria-label="Hive">
    <defs>
      <linearGradient id="hiveBar" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#6d9dff" />
        <stop offset="100%" stopColor="#2f6bff" />
      </linearGradient>
    </defs>
    {[0, 1, 2].map((r) =>
      [0, 1, 2, 3].map((c) => {
        const x = 14 + c * 26 + (r % 2 ? 13 : 0)
        const y = 18 + r * 30
        return (
          <polygon
            key={`${r}-${c}`}
            points={`${x},${y} ${x + 13},${y + 7.5} ${x + 13},${y + 22.5} ${x},${y + 30} ${x - 13},${y + 22.5} ${x - 13},${y + 7.5}`}
            fill="none"
            stroke="rgba(157,171,196,.55)"
            strokeWidth="1.2"
          />
        )
      }),
    )}
    {[38, 62, 46, 84, 70, 96].map((h, i) => (
      <rect
        key={h}
        x={128 + i * 15}
        y={104 - h}
        width="9"
        height={h}
        rx="4"
        fill="url(#hiveBar)"
        opacity={0.35 + i * 0.13}
      />
    ))}
    <line x1="120" y1="104" x2="212" y2="104" stroke="rgba(157,171,196,.6)" strokeWidth="1.2" />
  </svg>
)

const covers = {
  'crud-lab': CrudCover,
  hive: HiveCover,
}

const ProjectCover = ({ slug, img, title }) => {
  if (img) {
    return (
      <div className="sunken relative h-[178px] overflow-hidden rounded-2xl">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
      </div>
    )
  }
  const Cover = covers[slug]
  return <Frame>{Cover ? <Cover /> : null}</Frame>
}

export default ProjectCover
