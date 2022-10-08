/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      colors: {
        'cold-blue': '#006C78',
      },
    },
  },
});
