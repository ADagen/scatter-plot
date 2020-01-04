import npmPackage from '../package';
import babelConfig from '../babel.config';

// список презетов, которые принудительно будут убраны из babel-config, ибо нам нужны свои параметры для `env`
const blacklistedPresets = ['es2015', 'es2016', 'es2017', 'es2018', 'latest', 'env', '@babel/preset-env'];
const withoutBlacklistedPresets = name => !blacklistedPresets.includes(name);

const blacklistedPlugins = [
    'transform-regenerator',
    'transform-async-to-generator',
];

export default (DEV_MODE, isModern) => {
    const browsersList = isModern ? npmPackage.browserslist : npmPackage.legacyBrowserslist;

    /**
     * For modern browsers we do not need plugins to transform async/await and so on
     */
    const excludePlugins = isModern ? blacklistedPlugins : [];

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false,
                loose: true,
                useBuiltIns: 'usage',
                corejs: {
                    version: '3.0.1',
                    proposals: true,
                },
                forceAllTransforms: !DEV_MODE && !isModern,
                // debug: DEV_MODE,
                targets: {
                    browsers: browsersList,
                },
                exclude: excludePlugins,
            },
        ],
        ...babelConfig.presets.filter(withoutBlacklistedPresets),
    ];

    const plugins = [
        ...babelConfig.plugins,
        ...(!DEV_MODE
            ? []
            : [
                  // Adds component stack to warning messages
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source
                  '@babel/plugin-transform-react-jsx-source',
                  // Adds __self attribute to JSX which React will use for some warnings
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-self
                  '@babel/plugin-transform-react-jsx-self',
              ]),
    ];

    const resultConfig = {
        // https://github.com/babel/babel-loader#options
        cacheDirectory: DEV_MODE,

        // https://babeljs.io/docs/usage/options/
        babelrc: false,
        configFile: false,
        presets,
        plugins,
    };

    // if (DEV_MODE) {
    //     console.log('/**');
    //     console.log(' * Result babel config is:');
    //     console.log(' */');
    //     console.log(JSON.stringify(resultConfig, null, 4));
    // }

    return resultConfig;
};
