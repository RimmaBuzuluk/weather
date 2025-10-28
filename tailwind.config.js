/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'snow': 'snow 3s linear infinite',
        'rain': 'rain 0.5s linear infinite',
        'sunshine': 'sunshine 2s ease-in-out infinite alternate',
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        rain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' }
        },
        sunshine: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1.1) rotate(5deg)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
