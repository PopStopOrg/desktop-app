"use strict";
const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools(); // Optional: open dev tools in dev mode
    }
    else {
        win.loadFile(path.join(__dirname, '../build/index.html'));
    }
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
