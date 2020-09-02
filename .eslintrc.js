module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
    },
    extends: [
        'standard',
    ],
    rules: {
        semi: 'off',
        indent: ['error', 4],
        'promise/param-names': 'off',
        'comma-dangle': ['error', 'always-multiline'],
    },
}
