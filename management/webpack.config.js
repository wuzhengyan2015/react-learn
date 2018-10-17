const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: devMode ? '[name].[hash].js' : '[name].[chunkhash].js',
    chunkFilename: devMode ? '[name].[hash].js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: devMode ? 'eval-source-map' : 'source-map',
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
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(scss)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(less)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
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
        test: /\.(png|jpg|gif|ttf|eot|woff|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash].[ext]',
              outputPath: 'images/'
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
    new BundleAnalyzerPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('dist/**/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 8080,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
}
