// @flow
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

dev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: dev ? 'development' : 'production',
    context: __dirname,
    entry: {
        index: dev ? './dev/index.js' : './src/index.js',
    },
    output: {
        filename: '[name].js',
        library: 'persian-katex-plugin',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'build'),
        publicPath: dev ? '/' : ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader',
                    ],
                }),
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                }],
            },
        ],
    },
    plugins: [
        dev && new HTMLPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: dev,
        }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
    devServer: {
        contentBase: [ path.join(__dirname, 'build'), __dirname ],
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 7940,
        stats: { colors: true },
    }
};
