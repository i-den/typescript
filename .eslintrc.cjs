module.exports = {
    
    root: true,

    ignorePatterns: [
        "dest/**",
        ".eslintrc.cjs",
        "node_modules/**"
    ],

    env: {
        browser: true,
        es2022: true
    },

    parser: '@typescript-eslint/parser',

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],

    plugins: [
        '@typescript-eslint'
    ],


  };