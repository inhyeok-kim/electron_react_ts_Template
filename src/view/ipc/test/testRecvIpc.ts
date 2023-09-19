import ipcRenderer from "../ipcRenderer";

export function test(){
    ipcRenderer.send('test','test');
    ipcRenderer.once('reply-test',(e,payload)=>{
      console.log(payload);
    })
}