const {contextBridge, ipcRenderer} = require('electron')
contextBridge.exposeInMainWorld('ipcRenderer', {
  sendmessage: function (...args) {
    ipcRenderer.invoke('send', ...args)
  },
})
