const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const {isDev, isProd} = require('./lib/env')

app.whenReady().then(() => {
  let mainWin = new BrowserWindow({
    width: 300,
    height: 400,
    resizable: false,
    webPreferences: {
      preload: path.resolve(__dirname, isDev ? 'preload.ts' : 'preload.js'),
    },
  })
  mainWin.menuBarVisible = false
  isDev ? mainWin.loadURL('http://localhost:8080') : mainWin.loadFile(path.join(__dirname, '../renderer/index.html'))
})