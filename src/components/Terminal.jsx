/* eslint-disable react/prop-types */

// Piscando: bloco de cursor estilo terminal
export const Cursor = ({ className = '' }) => (
  <span className={`cursor-blink text-amber-400 ${className}`}>▮</span>
)

// Linha de prompt: guilherme@cadima:~/path$ comando
export const Prompt = ({ path = '~', cmd, className = '' }) => (
  <p className={`font-mono text-xs sm:text-sm ${className}`}>
    <span className="text-amber-500">guilherme@cadima</span>
    <span className="text-stone-600">:</span>
    <span className="text-stone-400">{path}</span>
    <span className="text-stone-600">$&nbsp;</span>
    <span className="text-stone-100">{cmd}</span>
  </p>
)

// Janela de terminal com barra de título
export const Window = ({ title = '', children, className = '', bodyClass = 'p-5 sm:p-7' }) => (
  <div
    className={`rounded-lg border border-stone-800 bg-[#100c07]/90 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.95)] overflow-hidden ${className}`}
  >
    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-stone-800 bg-[#0c0906]">
      <span className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
      </span>
      {title && (
        <span className="font-mono text-[11px] sm:text-xs text-stone-500 truncate">{title}</span>
      )}
    </div>
    <div className={bodyClass}>{children}</div>
  </div>
)

// Cabeçalho de seção: prompt + título comentado
export const SectionHeader = ({ path = '~', cmd, title, subtitle }) => (
  <div className="mb-10">
    <Prompt path={path} cmd={cmd} className="mb-4" />
    <h2 className="text-2xl md:text-3xl font-bold text-stone-100">
      <span className="text-stone-600 mr-2">#</span>
      {title}
    </h2>
    {subtitle && (
      <p className="text-stone-500 text-sm mt-3 max-w-[560px] leading-7">{subtitle}</p>
    )}
  </div>
)
