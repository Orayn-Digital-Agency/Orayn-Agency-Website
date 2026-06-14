import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      /* Allow unused vars prefixed with _ */
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      /* Allow any types in specific situations */
      '@typescript-eslint/no-explicit-any': 'warn',
      /* Allow empty interfaces */
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
]

export default eslintConfig
