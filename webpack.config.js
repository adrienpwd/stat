const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './js'),
    port: 8081
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'STAT',
      template: 'js/index.html'
    })
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: [/node_modules/],
        options: {
          plugins: ['react-hot-loader/babel'],
          cacheDirectory: true,
          presets: ['env', 'react']
        }
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
    modules: [path.resolve(__dirname), 'node_modules'],
    alias: {
      Components: path.resolve(__dirname, './js/components')
    }
  }
};
