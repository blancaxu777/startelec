const {contextBridge, ipcRenderer} = require('electron')
contextBridge.exposeInMainWorld('electron', {
  sendmessage: function (...args: any[]) {
    ipcRenderer.invoke('change', ...args)
  },
})
