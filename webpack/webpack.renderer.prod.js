const path = require('path')
const {srcRendererPath, distRendererPath} = require('./webpack.paths')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: path.join(srcRendererPath, 'index.js'),
  mode: 'production',
  target: ['web', 'electron-renderer'],
  output: {
    filename: 'bundle.js',
    path: distRendererPath,
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  externalsType: 'script',
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(srcRendererPath, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash:8].css',
    }),
  ],
  resolve: {
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
              cacheDirectory: true,
              presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
              plugins: [['@babel/plugin-transform-runtime']],
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
