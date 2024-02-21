module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "@renanlido/eslint-config/react",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'vite.config.ts'],
  parserOptions: { 
    ecmaVersion: 'latest', sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
   },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  
}
