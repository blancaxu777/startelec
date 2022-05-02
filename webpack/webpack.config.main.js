const path = require('path')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'main', 'main.js'),
  mode: 'development',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '..', 'dist/main'),
    clean: true,
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 60,
    ignored: '**/node_modules',
    poll: 30,
  },
  target: 'electron-main',
  devtool: 'cheap-module-source-map',
}
