const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map', 
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.join(__dirname, 'src/components'),
            containers: path.join(__dirname, 'src/containers')
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader?cacheDirectory=true',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
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