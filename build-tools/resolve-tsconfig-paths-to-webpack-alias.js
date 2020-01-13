/**
 * Преобразует тайпскриптовый конфиг compilerOptions.path в webpack-алиасы.
 * Взято из https://gist.github.com/nerdyman/2f97b24ab826623bff9202750013f99e
 */
import { resolve } from 'path';

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
export function resolveTsconfigPathsToWebpackAlias({
    tsconfigPath = './tsconfig.json',
    webpackConfigBasePath = __dirname,
} = {}) {
    const { paths } = require(tsconfigPath).compilerOptions;

    const aliases = {};

    Object.entries(paths).forEach(([tsKey, tsValue]) => {
        const webpackKey = tsKey.replace('/*', '');
        const webpackValue = resolve(webpackConfigBasePath, tsValue[0].replace('/*', '').replace('*', ''));

        aliases[webpackKey] = webpackValue;
    });

    return aliases;
}
