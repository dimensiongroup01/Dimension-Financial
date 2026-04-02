import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)']
      },
      colors: {
        ink: '#111827',
        slate: '#dcecff',
        mist: '#334155',
        gold: '#1f7fe5',
        aqua: '#2f9bff'
      },
      boxShadow: {
        glow: '0 0 90px rgba(47, 155, 255, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;

