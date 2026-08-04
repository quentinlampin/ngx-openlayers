// eslint.config.js
// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const { defineConfig } = require('eslint/config');

/** @type {import('eslint').Linter.RulesRecord} */
const commonRules = {
    'jsdoc/newline-after-description': 'off',

    '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
            accessibility: 'explicit',
        },
    ],

    '@typescript-eslint/naming-convention': [
        'error',
        {
            selector: 'objectLiteralProperty',
            leadingUnderscore: 'allow',
            format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        },
    ],

    'arrow-parens': 'off',
    'import/order': 'off',
};

const commonTsConfig = {
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
        parserOptions: {
            project: ['tsconfig.json', 'e2e/tsconfig.json'],
        },
    },
};

module.exports = defineConfig(
    // Demo application
    {
        ...commonTsConfig,
        files: ['src/**/*.ts'],
        rules: {
            ...commonRules,
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
        },
    },

    // ngx-openlayers library
    {
        ...commonTsConfig,
        files: ['projects/ngx-openlayers/**/*.ts'],
        rules: {
            ...commonRules,
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'aol',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'aol',
                    style: 'kebab-case',
                },
            ],
        },
    },

    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended],
    }
);