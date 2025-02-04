/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#064635',
            },
            h2: {
              color: '#064635',
            },
            h3: {
              color: '#064635',
            },
            strong: {
              color: '#064635',
            },
            a: {
              color: '#D4AF37',
              '&:hover': {
                color: '#064635',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};