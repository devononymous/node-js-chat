import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';


const app = express();

//1  Create server using http.

const server = http.createServer()

//2. Create a socket server

const io = new Server(server,{
    cors:{
       origin:"*",
       methods:["GET", "POST"]
    }
});

//4. To use socket events.

io.on('connection', (socket)=>{
    console.log("Connection is established")
    socket.on('disconnect', ()=>{
        console.log('connection is disconnected')
    })
})

server.listen(3000, ()=>{
    console.log("App listening on port: 3000 ")
})
