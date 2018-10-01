const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin    = require("mini-css-extract-plugin");
const iconfontWebpackPlugin   = require('iconfont-webpack-plugin');

const mode = process.env.WEBPACK_MODE || 'development';

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    },
    mode: mode,
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './')
        }
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "./[name].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            inject: true
        })
    ],
    devServer: {
        open: true,
        historyApiFallback: true,
        noInfo: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react']
                }

            },
            {
                test: /\.styl$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                new iconfontWebpackPlugin(loader),
                                require('autoprefixer')({
                                    browsers: ['last 2 versions'],
                                    grid: true
                                })
                            ]
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            import: path.resolve(__dirname, './src/configs/variants.styl')
                        }
    
                    }
                ]
            }
        ]
    }
};