const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const miniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: miniCssExtract.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new miniCssExtract({
            filename: 'asssets/[name].css'
        })
    ],
    devServer: {
        port: 9000
    },
    mode: 'development'
}