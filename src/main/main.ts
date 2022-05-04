const {app, ipcMain} = require('electron')
const path = require('path')
const createWindow = require('./lib/createWindow.js')
const {isDev} = require('./lib/env')
const {distRendererPath} = require('../../webpack/webpack.paths.js')
app.whenReady().then(() => {
  createWindow({
    preload: path.join(__dirname, './preload.js'),
    loadURL: isDev ? 'http://localhost:8080' : path.join(distRendererPath, 'index.html'),
  })
})