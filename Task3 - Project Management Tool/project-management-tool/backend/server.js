const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const path = require('path');
const socketHandler = require('./socket');
require('dotenv').config(); 

const app = express(); 

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/tasks', require('./routes/task'));
app.use('/api/comments', require('./routes/comment'));
app.use('/api/chats', require('./routes/chat'));
app.use('/api/users', require('./routes/user'));


// STATIC FILES
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
// SOCKET SETUP
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: "*" }
});
socketHandler(io);

// DB + SERVER
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
