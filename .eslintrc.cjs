/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'prettier',
  ],
};
