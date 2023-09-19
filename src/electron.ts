import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import url from 'url';
import ipcLoader from './app/ipcLoader';

const isDev = !app.isPackaged;

let mainWindow : any;

function createWindow() {
    
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation : false
    },
    autoHideMenuBar: !isDev,
  });

  if(isDev){
    mainWindow.loadURL('http://localhost:3000');
    // mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, "./render/index.html"), // relative path to the HTML-file
      protocol: "file:",
      slashes: true
    }));

    // mainWindow.setMenu(null);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

}

app.on('ready', ()=>{
  createWindow();

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });

  ipcLoader();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


