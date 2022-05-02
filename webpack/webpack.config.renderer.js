const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'renderer', 'index.jsx'),
  mode: 'development',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '..', 'dist/renderer'),
    clean: true,
  },
  // node: {
  //   global: true,
  //   __filename: false,
  //   __dirname: false,
  // },
  // target: 'electron-renderer',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      cache: true,
      inject: 'body',
      title: 'startElec',
      template: path.resolve(__dirname, '..', 'src', 'renderer', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash:8].css',
    }),
  ],
  resolve: {
    alias: {},
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
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
    ],
  },
}
