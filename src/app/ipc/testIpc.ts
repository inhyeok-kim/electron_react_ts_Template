import { ipcMain } from "electron";

export default function testIpc(){
    ipcMain.on("test",(e,payload)=>{
        console.log('test/ipc', payload);
        e.reply('reply-test','hello~~');
    });
}