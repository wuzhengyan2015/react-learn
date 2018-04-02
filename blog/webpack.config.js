const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',  
    entry: {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux', 'antd',  'whatwg-fetch']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader?cacheDirectory=true',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true
              }
        }
    }
}