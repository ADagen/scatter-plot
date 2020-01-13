module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
    plugins: [
        // stage-0

        // stage-1
        '@babel/plugin-proposal-do-expressions',
        [
            '@babel/plugin-proposal-pipeline-operator',
            {
                proposal: 'smart',
            },
        ],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-logical-assignment-operators',
        [
            // TODO: удалить в рамках перехода на babel@7.8.0 https://babeljs.io/blog/2020/01/11/7.8.0
            '@babel/plugin-proposal-nullish-coalescing-operator',
            {
                loose: true,
            },
        ],
        // TODO: удалить в рамках перехода на babel@7.8.0 https://babeljs.io/blog/2020/01/11/7.8.0
        '@babel/plugin-proposal-optional-chaining',

        // stage-2
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',

        // stage-3
        // TODO: удалить в рамках перехода на babel@7.8.0 https://babeljs.io/blog/2020/01/11/7.8.0
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true,
            },
        ],
        [
            '@babel/plugin-proposal-private-methods',
            {
                loose: true,
            },
        ],
        '@babel/plugin-proposal-json-strings',

        // ES2018
        [
            '@babel/plugin-proposal-object-rest-spread',
            {
                loose: true,
                useBuiltIns: true,
            },
        ],
    ],
};
