const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const {srcRendererPath, distRendererPath, distPath} = require('./webpack.paths')
module.exports = {
  entry: path.join(srcRendererPath, 'index.jsx'),
  mode: 'development',
  output: {
    filename: '[name].[contenthash:8].js',
    path: distRendererPath,
    clean: true,
  },
  // node: {
  //   global: true,
  //   __filename: false,
  //   __dirname: false,
  // },
  target: ['web', 'electron-renderer'],
  devtool: 'cheap-module-source-map',
  devServer: {
    static: distPath,
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
  resolve: {
    alias: {},
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
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
}
