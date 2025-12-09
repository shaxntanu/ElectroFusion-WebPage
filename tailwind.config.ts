import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#4169E1',
          dark: '#1E40AF',
          light: '#6B8DD6',
        },
        cherry: {
          DEFAULT: '#FF6B9D',
          light: '#FFB3D9',
          dark: '#E5527F',
        },
        neutral: {
          bg: '#FFFFFF',
          text: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
