import os from 'os';
import path from 'path';
import extend from 'extend';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackMultiBuildPlugin from 'html-webpack-multi-build-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import * as threadLoader from 'thread-loader';

import babelLoaderOptions from './babel-loader.webpack.config';
import npmPackage from '../package';
import projectConfig from '../config/projectConfig';
import { Env } from '../config/Env';

const projectRoot = path.join(__dirname, '..');
const outputPath = path.join(projectRoot, 'dist');
const srcPath = path.join(projectRoot, 'src');

const IS_DEV_ENV = process.env.NODE_ENV === Env.DEVELOPMENT;

const templateSourceFile = IS_DEV_ENV ? 'index-dev.html' : 'index.html';
const indexHTMLTemplatePath = path.join(srcPath, templateSourceFile);

// thread loader enables move expensive operations to separate node.js processes
const cpusCount = os.cpus().length;
const THREAD_LOADER_OPTIONS = {
    poolRespawn: !IS_DEV_ENV,
    poolTimeout: IS_DEV_ENV ? Infinity : 2000, // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
    workers: cpusCount ? cpusCount - 1 : 1, // cpus - 1 because there should be 1 cpu for some stupid plugins
    workerParallelJobs: 2,
};

threadLoader.warmup(
    {
        // pool options, like passed to loader options
        // must match loader options to boot the correct pool
        ...THREAD_LOADER_OPTIONS,
    },
    ['babel-loader'],
);

console.info(
    '\n\n\n--------------\n',
    'result project configuration is',
    '\n--------------\n',
    `ID_DEV_ENV: ${IS_DEV_ENV}\n`,
    '\n--------------\n',
    JSON.stringify(projectConfig, null, 4),
    '\n--------------\n\n\n',
);

const RESOLVE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx", ".d.ts", ".json", ".css"];

export const baseConfig = {
    target: 'web',

    mode: IS_DEV_ENV ? Env.DEVELOPMENT : Env.PRODUCTION,
    devtool: IS_DEV_ENV ? 'source-map' : false,
    devServer: {
        port: projectConfig.devLocal.devServerPort,
        contentBase: outputPath,
        hot: IS_DEV_ENV,
        historyApiFallback: true,
    },

    optimization: IS_DEV_ENV ? {
        minimize: false,
    } : {
        namedModules: false,
        namedChunks: false,
        moduleIds: 'named',
        chunkIds: 'named',
        minimize: true,
        splitChunks: {
            chunks: 'all',
            name: false,
            minChunks: 2,
            automaticNameDelimiter: '~',

            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react',
                    priority: -8,
                    enforce: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    priority: -16,
                    minSize: 100000,
                    maxSize: 200000,
                    enforce: true,
                },
                default: {
                    minChunks: 2,
                    priority: -32,
                    minSize: 100000,
                    maxSize: 200000,
                    reuseExistingChunk: true,
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    enforce: true,
                },
            },
        },
        runtimeChunk: {
            name: 'runtime',
        },
        concatenateModules: true,
    },

    resolve: {
        symlinks: false,
        extensions: RESOLVE_EXTENSIONS,
    },

    plugins: [
        new CaseSensitivePathsPlugin(),

        new webpack.DefinePlugin({
            'IS_DEV_ENV'           : JSON.stringify(IS_DEV_ENV),
            'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV),
            'process.env.BROWSER'  : JSON.stringify(true),
        }),

        new MiniCssExtractPlugin({
            filename: IS_DEV_ENV
                ? `${outputPath}/css/[name].css`
                : `${outputPath}/css/[name]_[contenthash].css`,
            chunkFilename: IS_DEV_ENV
                ? `${outputPath}/css/[name].css`
                : `${outputPath}/css/[name]_[contenthash].css`,
        }),

        // index.html
        new HtmlWebpackPlugin({
            inject: IS_DEV_ENV,
            filename: 'index.html', // destination filename (for `dist` directory)
            template: indexHTMLTemplatePath, // source filename
            //...indexHTMLTemplateParams,
            minify: {
                collapseWhitespace: !IS_DEV_ENV,
                collapseInlineTagWhitespace: !IS_DEV_ENV,
                minifyCSS: !IS_DEV_ENV,
                minifyURLs: !IS_DEV_ENV,
                minifyJS: !IS_DEV_ENV,
                removeComments: false,
                removeRedundantAttributes: !IS_DEV_ENV,
            },
        }),

        ...(IS_DEV_ENV
            // DEVELOPMENT
            ? [
                  new BundleAnalyzerPlugin({
                      analyzerMode: 'server',
                      analyzerHost: 'localhost',
                      analyzerPort: 12345,
                      logLevel: 'info',
                      openAnalyzer: false,
                  }),

                  new webpack.NamedModulesPlugin(),
                  new webpack.HotModuleReplacementPlugin(),
              ]
            // PRODUCTION
            : [
                  new HtmlWebpackMultiBuildPlugin(),
              ]),
    ],

    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: srcPath,
                loader: 'file-loader',
                options: {
                    name: `img/[hash].[ext]`,
                },
            },

            // transform styles
            {
                test: /\.css$/,
                include: srcPath,
                use: [
                    IS_DEV_ENV ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV_ENV,
                            modules: {
                                localIdentName: IS_DEV_ENV ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: npmPackage.browserslist,
                                    remove: false,
                                }),
                            ],
                            sourceMap: IS_DEV_ENV,
                        },
                    },
                ],
            },
        ],
    },

    watchOptions: {
        aggregateTimeout: 400,
    },

    // Don't attempt to continue if there are any errors.
    bail: !IS_DEV_ENV,

    cache: IS_DEV_ENV,

    stats: {
        assets: false,
        children: true,
        modules: false,
        performance: false,
        publicPath: false,
        maxModules: 2,
        colors: process.stdout.isTTY,
        reasons: false,
        hash: false,
        version: true,
        timings: true,
        chunks: false,
        chunkGroups: false,
        chunkModules: false,
        cached: false,
        cachedAssets: false,
    },
};

/**
 * For legacy browsers
 * JS compile to ECMAScript 5
 */
const legacyConfig = extend(true, {}, baseConfig, {
    entry: {
        main: [
            'core-js/stable',
            'regenerator-runtime/runtime',
            //'intersection-observer',
            npmPackage.main,
        ],
    },

    output: {
        path: outputPath,
        filename: `js/[name]_[hash]_legacy.js`,
        chunkFilename: `js/[name]_[hash]_legacy.js`,
        publicPath: '/',
    },
});

legacyConfig.module.rules.push({
    test: /\.tsx?$/,
    include: [
        srcPath,
    ],
    use: [
        // preventing babel-loader from freezing main node thread
        {
            loader: 'thread-loader',
            options: { ...THREAD_LOADER_OPTIONS },
        },
        {
            loader: 'babel-loader',
            options: babelLoaderOptions(IS_DEV_ENV, false),
        },
    ],
});

/**
 * For browsers with modules support:
 * - Edge 16 and higher
 * - FireFox 60 and higher
 * - Chrome 61 and higher
 * - Safari 10.1 and higher
 */
const modernConfig = extend(true, {}, baseConfig, {
    entry: {
        main: [
            'core-js/stable',
            // Polyfills lives here
            //'intersection-observer',
            npmPackage.main,
        ],
    },

    output: {
        path: outputPath,
        filename: `js/[name]_[hash].js`,
        chunkFilename: `js/[name]_[hash].js`,
        publicPath: '/',
    },
});

modernConfig.module.rules.push({
    test: /\.tsx?$/,
    include: [srcPath],
    use: [
        // preventing babel-loader from freezing main node thread
        {
            loader: 'thread-loader',
            options: { ...THREAD_LOADER_OPTIONS },
        },
        {
            loader: 'babel-loader',
            options: babelLoaderOptions(IS_DEV_ENV, true),
        },
    ],
});

const multiConfig = [legacyConfig, modernConfig];

// console.log('===========================================================================');
// console.log(JSON.stringify(modernConfig, null, 4));
// console.log('===========================================================================');

export default (IS_DEV_ENV ? modernConfig : multiConfig);
