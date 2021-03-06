var HtmlWebapckPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: __dirname + '/src/index.html'
        })
    ],
    devServer: {
        inline: true,
        historyApiFallback: true,
        open: true
    }
}