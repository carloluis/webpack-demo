const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const package = require('../package.json');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        app: [PATHS.src],
        vendors: Object.keys(package.dependencies)
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.jsm'],
        alias: {
            styles: path.resolve(__dirname, '../src/styles')
        }
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: 'dashes',
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../node_modules/html-webpack-template/index.ejs',
            title: 'Webpack 4 Demo',
            favicon: '../src/favicon.ico',
            meta: [{ name: 'robots', content: 'noindex,nofollow' }],
            appMountIds: ['app'],
            inject: false,
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                useShortDoctype: true,
                html5: true
            },
            mobile: true,
            scripts: ['/static.js']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(PATHS.src, 'favicon.ico'),
                to: path.join(PATHS.dist, 'favicon.ico')
            },
            {
                from: path.join(PATHS.src, 'demo/static.js'),
                to: path.join(PATHS.dist, 'static.js')
            }
        ]),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        })
    ],
    devServer: {
        contentBase: PATHS.dist,
        compress: true,
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
        },
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
        publicPath: 'http://localhost:8080/',
        hot: true
    },
    stats: {
        children: false
    }
};
