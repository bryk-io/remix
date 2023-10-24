/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  // enable dark mode support using `class="dark"`
  // user OS preference can be detected using:
  //   window.matchMedia('(prefers-color-scheme: dark)').matches
  // https://tailwindcss.com/docs/dark-mode
  darkMode: 'class',
  // https://tailwindcss.com/docs/plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
  // https://tailwindcss.com/docs/theme
  theme: {
    extend: {},
  },
};
