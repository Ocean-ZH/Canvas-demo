const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        a: './src/index.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename:'[name].bundle.js',
    },
    mode:'development',
    devServer: {
        contentBase: path.join(__dirname, 'server'),
        compress: true,
        // host: '127.0.0.1',
        port: 9000,
        open: true,
        inline: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/Ball_drawing/index.html',
            filenamme: 'index.html',
            hash: false,
            chunks: ['a'],
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*','!dontDel.txt'],
        }),
    ],
}