/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        base: '#e8ecf3',
        surface: '#eef1f7',
        'surface-hi': '#f6f8fc',
        ink: '#18202e',
        'ink-soft': '#3d4859',
        muted: '#6d7a8d',
        line: '#d7dee9',
        accent: {
          DEFAULT: '#2f6bff',
          soft: '#6d9dff',
          deep: '#1b4ddb',
          wash: '#e4ecff',
        },
      },
      boxShadow: {
        raised: '12px 12px 26px rgba(157,171,196,.50), -10px -10px 24px rgba(255,255,255,.95)',
        'raised-sm': '7px 7px 16px rgba(157,171,196,.40), -6px -6px 14px rgba(255,255,255,.92)',
        sunken: 'inset 6px 6px 12px rgba(157,171,196,.50), inset -6px -6px 12px rgba(255,255,255,.95)',
        'sunken-sm': 'inset 4px 4px 9px rgba(157,171,196,.45), inset -3px -3px 7px rgba(255,255,255,.92)',
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
