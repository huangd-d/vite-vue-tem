const path = require('path')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/base',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'plugin:prettier/recommended', // 添加 prettier 插件
        'eslint:recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        vueFeatures: {
            filter: true,
            interpolationAsNonHTML: false
        }
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'import/extensions': [2, 'never', { ts: 'never', json: 'never', vue: 'never' }],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'import/no-unresolved': [2, { ignore: ['antd-mobile'] }]
    },
    settings: {
        'import/no-unresolved': {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, 'src')],
                extensions: ['.ts', '.js', '.jsx', '.vue']
            }
        }
    }
}
