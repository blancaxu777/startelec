const {BrowserWindow} = require('electron')
function createWindow({width = 500, height = 500, preload, loadURL, loadFile}) {
  let win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: preload,
    },
  })
  loadURL ? win.loadURL(loadURL) : loadFile && win.loadFile(loadFile)
}
module.exports = createWindow
