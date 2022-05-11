const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getPreloadNum: function () {
    let num: number = 18
    return num
  },
})

export {}
