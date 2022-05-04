const {contextBridge, ipcRenderer} = require('electron')
contextBridge.exposeInMainWorld('electron', {
  sendmessage: function (...args) {
    ipcRenderer.invoke('change', ...args)
  },
})
