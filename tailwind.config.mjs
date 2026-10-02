/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'box-a': '#787878',
        'box-p': '#fda128',
        'box-color': '#dcdcdc',
      },
      fontFamily: {
        jura: ['Jura', 'sans-serif'],
      },
      screens: {
        'max-1200': { max: '1200px' },
        'max-900': { max: '900px' },
        'max-430': { max: '430px' },
        'max-375': { max: '375px' },
      }
    },
  },
  plugins: [],
}
