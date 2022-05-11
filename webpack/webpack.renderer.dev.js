const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const {srcRendererPath, distRendererPath, distPath} = require('./webpack.paths')
const {merge} = require('webpack-merge')
const webpackBase = require('./webpack.base')
module.exports = merge(webpackBase, {
  entry: path.join(srcRendererPath, 'index.js'),
  mode: 'development',
  output: {
    filename: 'renderer.dev.js',
    path: distRendererPath,
    clean: true,
    library: {
      type: 'umd',
    },
  },
  target: ['web', 'electron-renderer'],
  devtool: 'cheap-module-source-map',
  devServer: {
    static: distPath,
    compress: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      env: process.env.NODE_ENV,
      isBrowser: false,
      cache: true,
      inject: 'body',
      title: 'startElec',
      template: path.resolve(srcRendererPath, 'index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
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
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
})
