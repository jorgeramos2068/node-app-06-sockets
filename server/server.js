const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();

// Definir servidor para correr la aplicación
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar socket.io para comunicación de backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${ port }`);
});
