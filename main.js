import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

let win

function createWindow () {
  // Create browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: join(__dirname, './assets/icons/win/logo.ico')
  })

  // Load `index.html`
  win.loadURL(format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open devTools
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

// Run createWindow
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  };
})
