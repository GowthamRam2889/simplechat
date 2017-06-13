io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
