const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

/* App Control Bar */
closeButton.addEventListener('click', () => {
    ipc.send('closeWindow')
})