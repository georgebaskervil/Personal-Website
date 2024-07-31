/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neutral: '#2D2A2A',
        text: '#DCD7BA',
        accent: '#C8C093',
    },
  },
},
  plugins: [require('@tailwindcss/typography')],
};
