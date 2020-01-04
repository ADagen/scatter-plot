import os from 'os';
import path from 'path';
import extend from 'extend';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackMultiBuildPlugin from 'html-webpack-multi-build-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackVisualizer from 'webpack-visualizer-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import * as threadLoader from 'thread-loader';

import babelLoaderOptions from './babel-loader.webpack.config';
import npmPackage from '../package';
import projectConfig from '../config/projectConfig';
import { Env } from '../config/Env';


const outputPath = path.join(__dirname, 'dist');
const srcPath = path.join(__dirname, 'src');


const BUILD_ENV = process.env.NODE_ENV === Env.development;

const templateSourceFile = BUILD_ENV ? 'index-dev.html' : 'index.html';
const indexHTMLTemplatePath = path.join(srcPath, templateSourceFile);

// thread loader enables move expensive operations to separate node.js processes
const cpusCount = os.cpus().length;
const THREAD_LOADER_OPTIONS = {
    poolRespawn: !BUILD_ENV,
    poolTimeout: BUILD_ENV ? Infinity : 2000, // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
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
    `BUILD_ENV: ${BUILD_ENV}\n`,
    '\n--------------\n',
    JSON.stringify(projectConfig, null, 4),
    '\n--------------\n\n\n',
);

export const baseConfig = {
    target: 'web',

    mode: BUILD_ENV,
    devtool: BUILD_ENV ? 'source-map' : false,
    devServer: {
        port: projectConfig.devLocal.devServerPort,
        contentBase: outputPath,
        hot: BUILD_ENV,
        historyApiFallback: true,
    },

    optimization: BUILD_ENV ? {
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
                datepicker: {
                    // The Curious Case of Benjamin <striked>Button</striked> DatePicker
                    // This is the special css-chunk for `react-dates`
                    // @see {@link https://github.com/airbnb/react-dates/issues/992#issuecomment-365275132}
                    name: 'datepicker',
                    test: /_datepicker\.css$/,
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
    },

    plugins: [
        new CaseSensitivePathsPlugin(),

        new webpack.DefinePlugin({
            BUILD_ENV,
            'process.env.NODE_ENV': JSON.stringify(BUILD_ENV),
            'process.env.BUILD_ENV': JSON.stringify(BUILD_ENV),
            'process.env.BROWSER': true,
        }),

        new MiniCssExtractPlugin({
            filename: BUILD_ENV
                ? `${outputPath}css/[name].css`
                : `${outputPath}css/[name]_[contenthash].css`,
            chunkFilename: BUILD_ENV
                ? `${outputPath}css/[name].css`
                : `${outputPath}css/[name]_[contenthash].css`,
        }),

        // index.html
        new HtmlWebpackPlugin({
            inject: BUILD_ENV,
            filename: 'index.html', // destination filename (for `dist` directory)
            template: indexHTMLTemplatePath, // source filename
            //...indexHTMLTemplateParams,
            minify: {
                collapseWhitespace: !BUILD_ENV,
                collapseInlineTagWhitespace: !BUILD_ENV,
                minifyCSS: !BUILD_ENV,
                minifyURLs: !BUILD_ENV,
                minifyJS: !BUILD_ENV,
                removeComments: false,
                removeRedundantAttributes: !BUILD_ENV,
            },
        }),

        ...(BUILD_ENV
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
                include: path.resolve(__dirname, 'src'),
                loader: 'file-loader',
                options: {
                    name: `${staticPrefixPath}img/[hash].[ext]`,
                },
            },

            // transform styles
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    BUILD_ENV ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: BUILD_ENV,
                            modules: true,
                            localIdentName: BUILD_ENV ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
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
                            sourceMap: BUILD_ENV,
                        },
                    },
                    // preventing sass-loader from freezing main node thread
                    {
                        loader: 'thread-loader',
                        options: { ...THREAD_LOADER_OPTIONS },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: BUILD_ENV,
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
    bail: !BUILD_ENV,

    cache: BUILD_ENV,

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
        version: outputPath,
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
            'intersection-observer',
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
    test: /\.ts$/,
    include: [
        path.resolve(__dirname, 'src'),
    ],
    use: [
        // preventing babel-loader from freezing main node thread
        {
            loader: 'thread-loader',
            options: { ...THREAD_LOADER_OPTIONS },
        },
        {
            loader: 'babel-loader',
            options: babelLoaderOptions(BUILD_ENV, false),
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
            'intersection-observer',
            // @see {@link https://github.com/airbnb/react-dates/issues/992#issuecomment-365275132}
            'react-dates/initialize',
            'react-dates/lib/css/_datepicker.css',
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
    test: /\.ts$/,
    include: [path.resolve(__dirname, 'src')],
    use: [
        // preventing babel-loader from freezing main node thread
        {
            loader: 'thread-loader',
            options: { ...THREAD_LOADER_OPTIONS },
        },
        {
            loader: 'babel-loader',
            options: babelLoaderOptions(BUILD_ENV, true),
        },
    ],
});

const multiConfig = [legacyConfig, modernConfig];

// console.log('===========================================================================');
// console.log(JSON.stringify(modernConfig, null, 4));
// console.log('===========================================================================');

export default (BUILD_ENV ? modernConfig : multiConfig);
