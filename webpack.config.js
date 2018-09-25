const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
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
                test: /\.(css|styl)$/,
                use: [
                    'css-loader',
                    'stylus-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            }
        ]
    }
};