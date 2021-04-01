const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const miniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
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
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 
                {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[hash].[ext]'
                    }
                }
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
        port: 9000,
        historyApiFallback: true
    },
    mode: 'development'
}