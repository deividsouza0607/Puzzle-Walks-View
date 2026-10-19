const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({
    width: 1280, height: 850, minWidth: 900, minHeight: 650,
    title: 'Puzzle Walks View',
    icon: path.join(__dirname, 'assets', 'puzzle-walks-key.ico'),
    backgroundColor: '#07100a',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(() => { Menu.setApplicationMenu(null); createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
