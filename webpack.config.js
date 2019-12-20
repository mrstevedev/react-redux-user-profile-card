const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'index_bundle.js'
    },
    devServer: {
        hot: true,
        port: 9001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                    
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/i,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new CopyWebpackPlugin([
          {from: './public/'}
        ])
      ]
};