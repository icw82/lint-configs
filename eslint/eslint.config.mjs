import js from '@eslint/js';

import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const base = {
    rules: {
        'no-multi-spaces': 2,
        'key-spacing': 2,
        'no-trailing-spaces': 'error',
        'space-infix-ops': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 100,
            },
        ],
        'max-lines': [
            'warn',
            {
                max: 1000,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-params': [
            'error',
            4,
        ],
        'max-nested-callbacks': [
            'warn',
            3,
        ],
        'max-depth': [
            'warn',
            4,
        ],
        'one-var': [
            'error',
            'never',
        ],
        'id-denylist': [
            'error',
            'boolean',
            'number',
            'string',
            'undefined',
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'object-curly-spacing': [
            'warn',
            'always',
        ],
        'func-call-spacing': [
            'error',
            'never',
        ],
        'semi-spacing': 'error',
        'keyword-spacing': 'error',
        'comma-spacing': 'error',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
                imports: 'always-multiline',
                objects: 'always-multiline',
            },
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                avoidQuotes: true,
            },
        ],
        'no-shadow': 'warn',
        'no-invalid-this': 'error',
        'no-this-before-super': 'error',
        'class-methods-use-this': 'warn',
        'prefer-arrow-callback': 'error',
        'prefer-object-spread': 'error',
        'no-await-in-loop': 'error',
        'no-return-await': 'error',
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
                next: [
                    'const',
                    'let',
                    'var',
                ],
            },
        ],
        quotes: [
            'error',
            'single',
        ],
        'quote-props': [
            'error',
            'as-needed',
            {
                keywords: true,
            },
        ],
        'no-useless-concat': 'error',
        semi: [
            'error',
            'always',
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        eqeqeq: [
            'error',
            'smart',
        ],
        'no-undefined': 'error',
        'no-else-return': 'error',
        'no-unused-expressions': 'error',
        'no-mixed-operators': 'error',
        'block-scoped-var': 'error',
        'getter-return': [
            'error',
        ],
        'no-setter-return': [
            'error',
        ],
        'no-return-assign': 'error',
        radix: 'error',
        'no-throw-literal': 'error',
        'spaced-comment': 'warn',

        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};

const typescript = {
    files: [
        '**/*.ts',
        '**/*.tsx',
    ],
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            project: 'tsconfig.json',
            ecmaVersion: 2021,
            sourceType: 'module',
        },
    },
    plugins: {
        '@typescript-eslint': tsPlugin,
    },
    rules: {
        'comma-dangle': 0,
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                enums: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
                generics: 'always-multiline',
                imports: 'always-multiline',
                objects: 'always-multiline',
                tuples: 'always-multiline',
            },
        ],

        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,

        'arrow-parens': 2,

        indent: 0,
        '@typescript-eslint/indent': [
            'error',
            4,
        ],

        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
                overrides: {
                    properties: 'no-public',
                    accessors: 'no-public',
                    constructors: 'no-public',
                    methods: 'no-public',
                    parameterProperties: 'no-public',
                },
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                singleline: {
                    requireLast: true,
                },
            },
        ],
        '@typescript-eslint/semi': [
            'error',
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unsafe-assignment': [
            'off',
        ],
        '@typescript-eslint/no-unsafe-call': [
            'off',
        ],
        '@typescript-eslint/no-unsafe-member-access': [
            'off',
        ],
        '@typescript-eslint/no-unsafe-return': [
            'off',
        ],
        '@typescript-eslint/type-annotation-spacing': [
            'error',
        ],
        '@typescript-eslint/typedef': [
            'error',
            {
                parameter: true,
                arrowParameter: false,
                memberVariableDeclaration: true,
            },
        ],
        '@typescript-eslint/no-empty-function': [
            'off',
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: false,
            },
        ],
        '@typescript-eslint/array-type': [
            'error',
            {
                'default': 'array',
            },
        ],
        '@typescript-eslint/no-inferrable-types': [
            'off',
            {
                ignoreParameters: true,
            },
        ],
    },
};

const jsdoc = {
    'jsdoc/check-alignment': [
        'error',
    ],
    'jsdoc/check-access': [
        'error',
    ],
    'jsdoc/check-param-names': [
        'error',
    ],
    'jsdoc/check-property-names': [
        'error',
    ],
    'jsdoc/check-tag-names': [
        'warn',
    ],
    'jsdoc/require-jsdoc': [
        'warn',
        {
            publicOnly: false,
            require: {
                ClassDeclaration: true,
                ClassExpression: true,
                FunctionDeclaration: true,
                FunctionExpression: true,
                MethodDefinition: true,
            },
            checkConstructors: false,
        },
    ],
    'jsdoc/no-types': [
        'error',
    ],
};

const es5 = {
    languageOptions: {
        ecmaVersion: 5,
        sourceType: 'script',
    },
    rules: {
        'max-params': 0,
        indent: 0,
        'no-undef': 0,
        'object-shorthand': 0,
        'prefer-arrow-callback': 0,
        'prefer-object-spread': 0,
    },
};


const all = [
    js.configs.recommended,
    base,
    typescript,
];


export {
    all,
    es5,
};
