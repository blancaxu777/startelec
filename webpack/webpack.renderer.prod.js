const path = require('path')
const {srcRendererPath, distRendererPath} = require('./webpack.paths')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const {merge} = require('webpack-merge')
const webpackBase = require('./webpack.base')
module.exports = merge(webpackBase, {
  entry: path.join(srcRendererPath, 'index.js'),
  mode: 'production',
  target: ['web', 'electron-renderer'],
  output: {
    filename: 'renderer.js',
    path: distRendererPath,
    clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(srcRendererPath, 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash:8].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
})
