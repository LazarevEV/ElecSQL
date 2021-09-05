const { ipcRenderer } = require('electron')
const ipc = ipcRenderer


/* App Control Bar */
minimizeButton.addEventListener('click', () => {
    ipc.send('minimizeApp')
})

function changeMaxResButton(isMaxsimized) {
    if (isMaxsimized) {
        maxresButton.classList.remove('maximizeButton')
        maxresButton.classList.add('restoreButton')
    } else {
        maxresButton.classList.remove('restoreButton')
        maxresButton.classList.add('maximizeButton')
    }
}

maxresButton = document.getElementById('maxresButton')
maxresButton.addEventListener('click', () => {
    ipc.send('maxresApp')
})
ipc.on('isMaximized', () => { changeMaxResButton(true) })
ipc.on('isRestored', () => { changeMaxResButton(false) })

closeButton.addEventListener('click', () => {
    ipc.send('closeApp')
})

/* Connections Sidebar */
addConnection.addEventListener('click', () => {
    ipc.send('addConnection')
})
