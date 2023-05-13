module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['package.json', 'package-lock.json', 'node_modules/'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'testing-library', 'jest-dom', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
  },
}
