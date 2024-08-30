import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-geist-mono)'],
        fontPrimary: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        meteor: 'meteor 5s linear infinite',

        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
      },
      colors: {
        bgPrimary: '#F3F3F3',
        blackPrimary: '#191A23',
        greenPrimary: '#B9FF66',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
      },
    },
  },

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#134e4a',

            // foreground: '#545454',
            primary: {
              //... 50 to 900
              foreground: '#006FEE',
              DEFAULT: '#006FEE',
            },
          },
          // ... rest of the colors
        },
        dark: {
          colors: {
            // background: 'transparent',
            // background: '#042749',

            foreground: '#ECEDEE',
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
