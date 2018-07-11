const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      views: path.resolve(__dirname, 'src/views'),
      containers: path.resolve(__dirname, 'src/containers'),
      components: path.resolve(__dirname, 'src/components'),
      actions: path.resolve(__dirname, 'src/redux/actions')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'font-size-base': '16px'
            }
          }
        }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
}
