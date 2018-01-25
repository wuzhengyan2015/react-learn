var HtmlWebapckPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
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
        historyApiFallback: true
    }
}