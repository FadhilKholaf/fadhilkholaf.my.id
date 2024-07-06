import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        intro: {
          '0%': { opacity: '0', transform: 'translate(100px)' },
          '100%': { opacity: '1', transform: 'translate(0px)' }
        }
      },
      animation: {
        intro: 'intro 1s '
      },
      colors: {
        primary: '#000000',
        secondary: '#F5F5F5',
        accent: '#007BFF'
      }
    }
  },
  plugins: [addVariablesForColors]
};

const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}

export default config;
