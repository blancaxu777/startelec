const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const createWindow = require('./lib/createWindow.js')
app.whenReady().then(() => {
  createWindow({preload: path.resolve(__dirname, './preload/mainWinPre.js'), loadURL: 'http://localhost:8080'})

  // mainwin.webContents.openDevTools()
})
