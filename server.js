var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var socket = require('socket.io');
var server = app.listen(3000);
var io = socket(server);
var ent = require('ent');
var encode = require('ent/encode');
var decode = require('ent/decode');

app.use(express.static('public'));

//Action sur la connection
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', ent.encode(msg));
    })
    console.log(encode('hello', { special: { l: true } }));
    console.log(encode('hello', { special: { l: true } }));
    console.log('User has connected');

    //Action à la deconnection
    socket.on('disconnect', function(){
        console.log('User is disconnected !')
    })
})