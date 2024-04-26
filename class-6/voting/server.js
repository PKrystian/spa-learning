const WebSocket = require('ws');
const express = require('express');
const http = require('http');

let results = {
    pizza: 0,
    pasta: 0
};

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server: server, path: "/voting" });
app.use(express.static('client'));
server.listen(3000);

const clients = new Set();

wsServer.on('connection', (socket) => {
    clients.add(socket);
    console.log('Client connected!');
    socket.on('message', (message) => {
        // handle vote
        if (message == 'pizza') {
            results.pizza++;
        } else if (message == 'pasta') {
            results.pasta++;
        }
        console.log('Message received: ' + message);
        wsServer.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                // send current results to all clients
                client.send(JSON.stringify(results));
                console.log('Sending to a client from clients.');
            }
        });
    });
    socket.on('error', (error) => {
        console.log('Error:' + error);
    });
    // send current results to a newly connected client
    socket.send(JSON.stringify(results));
    console.log('Sending to a newly connected client.');
    socket.on('close', () => {
        clients.delete(socket);
        console.log('Client disconnected, total number of clients is: ',
            clients.size);
    });
});
