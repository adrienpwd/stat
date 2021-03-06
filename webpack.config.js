const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './js'),
    port: 8081
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: [/node_modules/]
      },
      {
        loader: 'json-loader',
        test: /\.json/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'less-loader'
        ]
      },
      {
        loader: 'file-loader',
        test: /\.woff$/
      },
      {
        loader: 'file-loader',
        test: /\.woff2$/
      },
      {
        loader: 'file-loader',
        test: /\.svg$/
      }
    ]
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, './js/actions'),
      Components: path.resolve(__dirname, './js/components'),
      Constants: path.resolve(__dirname, './js/constants'),
      Ui: path.resolve(__dirname, './js/ui'),
      Utils: path.resolve(__dirname, './js/utils')
    }
  }
};
