let socket = io();
// Mensaje cuando esté conectado
socket.on('connect', function() {
  console.log('Conectado al servidor');
});
// Detectar si el servidor se desconectó
socket.on('disconnect', function() {
  console.log('Perdimos conexión con el servidor');
});
// Enviar información
socket.emit('enviarMensaje', {
  usuario: 'Superman',
  mensaje: 'Hola Mundo'
}, function(resp) {
  console.log('Respuesta del servidor: ', resp);
});
// Escuchar desde el cliente
socket.on('enviarMensaje', function(resp) {
  console.log('Info del servidor: ', resp);
});