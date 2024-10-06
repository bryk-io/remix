module.exports = {
  plugins: {
    // optimize imported CSS files
    // https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports
    'postcss-import': {},
    // enable sass-style nested rules
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    'tailwindcss/nesting': {},
    // core plugins
    'tailwindcss': {},
    'autoprefixer': {},
    // optimize produced files
    // https://cssnano.github.io/cssnano/docs/introduction/
    'cssnano': {
      preset: [
        'default',
        { discardComments: true },
      ],
    },
  },
};
