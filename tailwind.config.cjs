/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#48db9c',
          light: '#6ee2b0',
          dark: '#2ea87a',
        },
        background: {
          deep: '#05080F',
          surface: '#080D18',
          card: '#0C1525',
          hover: '#111E35',
        },
        text: {
          light: '#F0F4FA',
          muted: '#8A9BB8',
          dim: '#50637E',
        },
      },
      fontFamily: {
        display: ['var(--font-space)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
