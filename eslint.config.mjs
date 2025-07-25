import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript')];
eslintConfig.push({
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'no-empty': 'off',
    'no-warning-comments': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
});
export default eslintConfig;
