const express = require('express');
const app = express();
const socketIO = require('socket.io');

const http = require('http')
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    // When a client connects, log their socket ID
    console.log(`A client connected with socket ID: ${socket.id}`);

    socket.on('chat message', (msg => {
        console.log(`${socket.id} : ${msg}`)
        const data = `${socket.id} : ${msg}`;
        io.emit('chat message', msg);
    }))

    socket.on('disconnect', () => {
        // When a client disconnects, log their socket ID
        console.log(`A client disconnected with socket ID: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});