/** @type {import('tailwindcss').Config} */

// As cores vivem em variáveis CSS (src/index.css) para que o tema claro e o
// escuro compartilhem exatamente as mesmas classes: só o valor da variável
// muda quando .dark entra no <html>.
const token = (name) => `rgb(var(${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // sem cor chamada "base": o nome colide com o utilitário de tamanho
        // .text-base do Tailwind e apagava o ícone dos cartões pequenos
        surface: token('--c-surface'),
        'surface-hi': token('--c-surface-hi'),
        ink: token('--c-ink'),
        'ink-soft': token('--c-ink-soft'),
        muted: token('--c-muted'),
        line: token('--c-line'),
        accent: {
          DEFAULT: token('--c-accent'),
          soft: token('--c-accent-soft'),
          deep: token('--c-accent-deep'),
          wash: token('--c-accent-wash'),
        },
      },
      boxShadow: {
        raised: '12px 12px 26px var(--sh-dark), -10px -10px 24px var(--sh-light)',
        'raised-sm': '7px 7px 16px var(--sh-dark-soft), -6px -6px 14px var(--sh-light)',
        sunken: 'inset 6px 6px 12px var(--sh-dark), inset -6px -6px 12px var(--sh-light)',
        'sunken-sm': 'inset 4px 4px 9px var(--sh-dark-soft), inset -3px -3px 7px var(--sh-light)',
        accent: '0 10px 24px rgba(47,107,255,.35), inset 0 1px 0 rgba(255,255,255,.45)',
      },
      borderRadius: {
        xl2: '22px',
        xl3: '28px',
      },
    },
  },
  plugins: [],
}
