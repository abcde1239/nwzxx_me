import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const tsconfigPath = resolve(__dirname, 'tsconfig.app.json');
export default [
    // TS 文件配置
    {
        files: ['**/*.ts', '**/*.tsx'], // 匹配 TS/TSX 文件
        languageOptions: {
            parser: parser,
            parserOptions: {
                project: tsconfigPath,
                tsconfigRootDir: __dirname,
                ecmaVersion: 2022,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            // TypeScript 特定规则覆盖
            '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any 类型
            '@typescript-eslint/no-empty-interface': 'off', // 允许空接口
            'no-empty-object-type': 'off', // 允许空对象类型
        },
    },

    // JS 文件配置
    {
        files: ['**/*.js', '**/*.jsx'], // 匹配 JS/JSX 文件
        ...js.configs.recommended, // ESLint 官方推荐规则
    },
];
