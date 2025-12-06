/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00D4FF',
          magenta: '#FF0064',
          red: '#FF0000',
          green: '#00FF00',
          blue: '#0000FF',
        }
      },
      animation: {
        'glitch-drift': 'glitch-drift 0.15s infinite',
        'scanline-flicker': 'scanline-flicker 0.4s infinite',
        'artifacting-shift': 'artifacting-shift 0.3s infinite',
      },
      keyframes: {
        'glitch-drift': {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '20%': { transform: 'translateX(-2px) translateY(1px)' },
          '40%': { transform: 'translateX(1px) translateY(-2px)' },
          '60%': { transform: 'translateX(-1px) translateY(1px)' },
          '80%': { transform: 'translateX(2px) translateY(-1px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' },
        },
        'scanline-flicker': {
          '0%': { opacity: '0.8' },
          '50%': { opacity: '0.95' },
          '100%': { opacity: '0.8' },
        },
        'artifacting-shift': {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(-1px)' },
          '50%': { transform: 'translateX(1px)' },
          '75%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
}
