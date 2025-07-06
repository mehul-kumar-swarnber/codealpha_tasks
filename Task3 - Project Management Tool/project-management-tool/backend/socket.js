module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
    });
    socket.on('newChatMessage', ({ projectId, message }) => {
      io.to(projectId).emit('chatMessage', message);
    });

    socket.on('taskUpdated', (data) => {
      io.to(data.projectId).emit('taskUpdated', data);
    });

    socket.on('commentAdded', (data) => {
      io.to(data.projectId).emit('commentAdded', data);
    });
    socket.on('typing', data => {
      io.to(data.projectId).emit('typing', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
    socket.on('sendNotification', ({ projectId, message }) => {
      io.to(projectId).emit('receiveNotification', message);
    });

  });
};
