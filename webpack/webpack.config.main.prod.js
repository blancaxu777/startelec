const path = require('path')
const {srcMinPath, distMainPath} = require('./webpack.paths')
module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: {
    main: path.join(srcMinPath, 'main.ts'),
    preload: path.join(srcMinPath, 'preload.ts'),
  },
  output: {
    filename: '[name].js',
    path: distMainPath,
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
}
