/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070B11',
        panel: '#0C1119',
        raised: '#111826',
        line: '#1C2735',
        text: '#E7EDF4',
        muted: '#8C9CAE',
        signal: '#4C9BE8',
        verify: '#46B39A',
        ember: '#D79C5A',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        reading: '68ch',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
      animation: {
        rise: 'rise .7s cubic-bezier(.22,.61,.36,1) both',
        sweep: 'sweep 7s linear infinite',
      },
    },
  },
  plugins: [],
}
