const path = require('path')
const {srcMainPath, distMainPath} = require('./webpack.paths')
const {merge} = require('webpack-merge')
const webpackBase = require('./webpack.base')
module.exports = merge(webpackBase, {
  mode: 'development',
  target: 'electron-preload',
  entry: path.join(srcMainPath, 'preload.ts'),
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'preload.js',
    path: distMainPath,
  },
  watch: true,
})
