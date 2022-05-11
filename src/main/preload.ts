const {contextBridge, ipcRenderer} = require('electron')
let num: string = '123'
contextBridge.exposeInMainWorld('electron', {
  sendmessage: function (...args: any[]) {
    ipcRenderer.invoke('change', ...args)
    return num
  },
})

export {}
