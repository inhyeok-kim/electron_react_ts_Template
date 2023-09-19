import fs from 'fs';

export default function ipcLoader(){
    try {
        const services = fs.readdirSync(__dirname+'/ipc');
        services.forEach(service=>{
            require(__dirname+'/ipc/'+service).default();
        })
    } catch (error) {
        console.error(error);
    }
}
