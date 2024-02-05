const http = require('http');
const responseController = require('./controllers/responseController')
const { Server: IOServer } = require('socket.io');

const IoController = require('./controllers/IoController.js');

const server = http.createServer((requete, reponse) => {
    const url = requete.url;
    console.log(`${url}`);
    const constructeurReponse = new responseController(url, requete, reponse);
    constructeurReponse.handleRequest();   
});

const io = new IOServer(server);
const ioController = new IoController(io);
ioController.setupListeners(io);

server.listen(8081, () => {
    console.log('Serveur démarré sur http://localhost:8080');
});

