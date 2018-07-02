var express = require('express')
var socket = require('socket.io')


// Application Setup
var app = express();
var server = app.listen(8080, function() {
  console.log('listening to requests on port 8080!')
})

// static files
//app.use(express.static('public'))

// Socket setup
var io = socket(server)

io.on('connection', function(socket){
  console.log('Client Connected: ', socket.id)

  socket.on('chat', function(data){
    io.emit('chat', data)
  })

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data)
  })
})
