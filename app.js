const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set view engine
app.set('view engine', 'ejs');

// Serve static files correctly
app.use(express.static(path.join(__dirname, 'public')));

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);
});

// Route
app.get('/', (req, res) => {
  res.render('index'); // Make sure views/index.ejs exists
});

// Start server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});