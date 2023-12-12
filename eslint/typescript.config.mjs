import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';


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
            1,
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

        // 'no-unused-vars': 0,
        // '@typescript-eslint/no-unused-vars': 2,

        'arrow-parens': 2,

        indent: 0,
        // '@typescript-eslint/indent': [
        //     'error',
        //     4,
        // ],

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


export {
    typescript,
};
