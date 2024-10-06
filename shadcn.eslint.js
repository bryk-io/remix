import pluginReact from 'eslint-plugin-react';

// overrides for Shadcn UI components
export default {
  files: ['app/components/ui/*.{js,jsx,ts,tsx}'],
  plugins: {
    react: pluginReact,
  },
  rules: {
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'react/prop-types': [
      'warn',
      {
        ignore: ['className', 'classNames', 'mode'],
      },
    ],
    'react/no-unknown-property': [
      'warn',
      {
        ignore: [
          'cmdk-input-wrapper',
        ],
      },
    ],
    '@typescript-eslint/no-empty-object-type': [
      'warn',
      { allowInterfaces: 'with-single-extends' },
    ],
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'all',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
