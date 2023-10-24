# Remix Template

A simple but feature rich [Remix](https://remix.run/docs) template.

```sh
npx create-remix@latest --template bryk-io/remix
```

## Features and Utils

- TailwindCSS: A utility-first CSS framework
- Prettier: For automatic code formatting.
- ESLint: For automatic code linting.
- Vitest: For testing components and libraries.
- Playwright: For end-to-end testing.

## Testing

- Individual components and utilities can be testes using Vitest. Test files
  included by default are `**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`.
- End-to-end tests can be written using Playwright. Test files included by
  default are `tests/*.spec.{js,ts,jsx,tsx}`.

## Development

From your terminal:

```sh
make dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
make build
```

Then run the app in production mode:

```sh
make start
```

Now you'll need to pick a host to deploy it to.
