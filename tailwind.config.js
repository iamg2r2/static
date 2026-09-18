/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#eef7fa',
          100: '#d7ecf3',
          400: '#2ea3c9',
          500: '#087EA4',
          600: '#066e90',
          700: '#055a76',
        },
        tangerine: {
          50: '#fdf3ec',
          100: '#fbe3cf',
          400: '#f2a561',
          500: '#EF8A3A',
          600: '#d8721f',
        },
        charcoal: {
          700: '#33383d',
          800: '#24282c',
          900: '#1a1d20',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}
