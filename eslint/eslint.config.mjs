import js from '@eslint/js';

import { base } from './base.config.mjs'
import { typescript } from './typescript.config.mjs'
import { es5 } from './es5.config.mjs'


const all = [
    js.configs.recommended,
    base,
    typescript,
];


export {
    all,
    es5,
};
