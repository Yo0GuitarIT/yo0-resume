import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

const compat = new FlatCompat();

const eslintConfig = [
    ...compat.extends('next/core-web-vitals'),
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            import: importPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            'no-unused-vars': [
                'warn',
                { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
            ],
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'prettier/prettier': 'warn',
        },
    },
];

export default eslintConfig;
