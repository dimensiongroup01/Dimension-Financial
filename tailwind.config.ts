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
        aqua: '#0a5ea8'
      },
      boxShadow: {
        glow: '0 0 90px rgba(47, 155, 255, 0.2)'
      },
      fontSize: {
        'xs': ['0.7rem', { lineHeight: '1.4' }],
        'sm': ['0.8rem', { lineHeight: '1.5' }],
        'base': ['0.9rem', { lineHeight: '1.6' }],
        'lg': ['1rem', { lineHeight: '1.6' }],
        'xl': ['1.1rem', { lineHeight: '1.5' }],
        '2xl': ['1.25rem', { lineHeight: '1.4' }],
        '3xl': ['1.4rem', { lineHeight: '1.3' }],
        '4xl': ['1.6rem', { lineHeight: '1.2' }],
        '5xl': ['1.8rem', { lineHeight: '1.15' }],
        '6xl': ['2rem', { lineHeight: '1.1' }]
      }
    }
  },
  plugins: []
};

export default config;

