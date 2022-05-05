const path = require('path')
const {srcMainPath, distMainPath} = require('./webpack.paths')
module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: path.join(srcMainPath, 'main.ts'),

  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: '[name].js',
    path: distMainPath,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        ],
      },
    ],
  },
}
