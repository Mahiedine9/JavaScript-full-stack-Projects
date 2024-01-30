const http = require('http');
const responseBuilder = require('./controllers/responseBuilder');
const responseController = require('./controllers/responseController')


const server = http.createServer((requete, reponse) => {
    const url = requete.url;
    const constructeurReponse = new responseController(url, requete, reponse);;
    constructeurReponse.handleRequest();   
});

server.listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080');
});