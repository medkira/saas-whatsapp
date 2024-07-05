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
      },
      animation: {
        meteor: 'meteor 5s linear infinite',
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
      },
    },
  },

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // background: 'transparent',545454
            background: '#f2f2f2',

            foreground: '#545454',
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
          },
          // ... rest of the colors
        },
        // dark: {
        //   colors: {
        //     background: 'transparent',
        //     // background: '#042749',

        //     foreground: '#ECEDEE',
        //     primary: {
        //       //... 50 to 900
        //       foreground: '#FFFFFF',
        //       DEFAULT: '#006FEE',
        //     },
        //   },
        //   // ... rest of the colors
        // },
      },
    }),
  ],
};
