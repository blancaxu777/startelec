const path = require('path');
const rootPath = path.join(__dirname, '../');
const srcPath = path.join(rootPath, 'src');
const srcMinPath = path.join(srcPath, 'main');
const srcRendererPath = path.join(srcPath, 'renderer');
const distPath = path.join(rootPath, 'dist');
const distMainPath = path.join(distPath, 'main');
const distRendererPath = path.join(distPath, 'renderer');

module.exports = {
  rootPath,
  srcPath,
  srcMinPath,
  srcRendererPath,
  distPath,
  distMainPath,
  distRendererPath
}