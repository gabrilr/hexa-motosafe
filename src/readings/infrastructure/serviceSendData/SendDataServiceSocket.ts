import io from 'socket.io-client';
import { Reading } from '../../domain/entity/Reading';
import { SendDataService } from '../../application/services/SendDataService';

export class SendDataServiceSocket implements SendDataService{
    sendData(reading: Reading): string {
        const socket = io('https://socketserver-proyecto.onrender.com');

        socket.on("connect", ()=>{
            console.log("Connected to server");
            
            socket.emit("newUser", reading);
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnet from server");
        });

        return "Data sent";
    }
}