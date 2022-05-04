const path = require('path')
const {srcRendererPath, distRendererPath} = require('./webpack.paths')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: path.join(srcRendererPath, 'index.jsx'),
  mode: 'production',
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
  target: 'electron-renderer',
  plugins: [
    new htmlWebpackPlugin({
      cache: true,
      inject: 'body',
      title: 'startElec',
      template: path.join(srcRendererPath, 'index.html'),
      isBrowser: false,
      isDevelopment: process.env.NODE_ENV !== 'production',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
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
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
}
