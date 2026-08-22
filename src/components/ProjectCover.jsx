/* eslint-disable react/prop-types */

/**
 * Capas desenhadas à mão (SVG/CSS) para cada projeto — nada de emoji
 * ou imagem genérica: cada capa representa o que o produto faz.
 */

const Frame = ({ children }) => (
  <div className="sunken relative h-[190px] overflow-hidden rounded-2xl">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.55]"
      style={{
        backgroundImage:
          'linear-gradient(var(--cover-grid) 1px, transparent 1px), linear-gradient(90deg, var(--cover-grid) 1px, transparent 1px)',
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
            stroke="var(--cover-line)"
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
    <line x1="120" y1="104" x2="212" y2="104" stroke="var(--cover-line)" strokeWidth="1.2" />
  </svg>
)


/* Ritmo — o planejamento em texto virando ritmo real por categoria */
const RitmoCover = () => (
  <div className="flex w-full max-w-[300px] items-center gap-4">
    {/* o planejamento declarado, escrito em texto livre */}
    <div className="raised-sm w-full rounded-xl p-3">
      {[86, 64, 78, 52].map((w, i) => (
        <div key={w} className="flex items-center gap-2 py-[5px]">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? 'bg-accent' : 'bg-muted/40'}`}
          />
          <span className="h-1.5 rounded-full bg-muted/25" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>

    <svg viewBox="0 0 120 108" className="h-[104px] w-[116px] shrink-0" role="img" aria-label="Ritmo">
      <defs>
        <linearGradient id="ritmoBar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6d9dff" />
          <stop offset="100%" stopColor="#2f6bff" />
        </linearGradient>
      </defs>

      {/* a meta declarada: onde as barras deveriam chegar */}
      <line
        x1="8"
        y1="36"
        x2="112"
        y2="36"
        stroke="rgba(47,107,255,.45)"
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />

      {/* o que de fato foi feito, por categoria de vida */}
      {[58, 70, 22, 52, 66].map((h, i) => (
        <rect
          key={h}
          x={13 + i * 20}
          y={92 - h}
          width="11"
          height={h}
          rx="4"
          fill={i === 2 ? 'var(--cover-line-soft)' : 'url(#ritmoBar)'}
          opacity={i === 2 ? 1 : 0.5 + i * 0.12}
        />
      ))}
      <line x1="6" y1="92" x2="114" y2="92" stroke="var(--cover-line)" strokeWidth="1.2" />

      {/* o desequilíbrio que a IA aponta: o quanto faltou para a meta */}
      <rect
        x="53"
        y="36"
        width="11"
        height="34"
        rx="4"
        fill="rgba(47,107,255,.10)"
        stroke="rgba(47,107,255,.55)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
    </svg>
  </div>
)

const covers = {
  ritmo: RitmoCover,
  'crud-lab': CrudCover,
  hive: HiveCover,
}

const ProjectCover = ({ slug, img, title }) => {
  if (img) {
    return (
      <div className="sunken relative h-[190px] overflow-hidden rounded-2xl">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
      </div>
    )
  }
  const Cover = covers[slug]
  return <Frame>{Cover ? <Cover /> : null}</Frame>
}

export default ProjectCover
