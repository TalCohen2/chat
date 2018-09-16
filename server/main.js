console.clear();

const express = require('express');
const socket = require('socket.io');
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => console.log(`node listening to ${PORT}`));
const io = socket(server);

io.on('connection',function(socket) {
    console.log('socket connected');
})