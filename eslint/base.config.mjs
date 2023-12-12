import jest from 'eslint-plugin-jest';
import globals from 'globals';


const base = {
    plugins: {
        jest,
    },
    languageOptions: {
        globals: {
            ...globals.jest,
        }
    },
    rules: {
        ...jest.configs.recommended.rules,

        // Затратная операция
        'no-unused-vars': 0,

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
        'comma-dangle': [ 1,
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
        'no-else-return': [
            'error',
            {
                allowElseIf: false,
            }
        ],
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


export {
    base,
}
