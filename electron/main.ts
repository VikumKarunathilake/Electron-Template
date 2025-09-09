import { app, BrowserWindow } from 'electron'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')

export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let mainWindow: BrowserWindow | null
let loadingWindow: BrowserWindow | null

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    transparent: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    center: true,
    resizable: false
  })

  if (VITE_DEV_SERVER_URL) {
    loadingWindow.loadFile(path.join(process.env.APP_ROOT, 'public', 'loading.html'))
  } else {
    loadingWindow.loadFile(path.join(process.env.VITE_PUBLIC, 'loading.html'))
  }

  return loadingWindow
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    show: false, // Don't show until ready to show
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  })

  // Show main window when it's ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    if (loadingWindow) {
      loadingWindow.close()
      loadingWindow = null
    }
    mainWindow?.show()
  })

  // Test active push message to Renderer-process.
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }

  return mainWindow
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    mainWindow = null
    loadingWindow = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createLoadingWindow()
    setTimeout(createMainWindow, 2000) // Small delay for demo purposes
  }
})

app.whenReady().then(() => {
  createLoadingWindow()
  
  // Create main window after a short delay to simulate loading
  // In a real app, you might want to wait for specific events
  setTimeout(() => {
    createMainWindow()
  }, 3000)
})