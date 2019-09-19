const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');
  // Emitir mensaje
  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicación'
  });
  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
  // Escuchar al cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);
    client.broadcast.emit('enviarMensaje', {
      usuario: data.usuario,
      mensaje: data.mensaje
    });
  });
});
