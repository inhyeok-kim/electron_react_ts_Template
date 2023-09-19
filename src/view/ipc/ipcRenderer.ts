let ipcRenderer;
if(window.require){
    ipcRenderer = window.require('electron');
} else {
  console.log('window.require is not exist');
  ipcRenderer = null;
}

export default ipcRenderer;