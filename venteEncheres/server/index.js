const http = require('http');
const responseController = require('./controllers/responseController')


const server = http.createServer((requete, reponse) => {
    const url = requete.url;
    console.log(`${url}`);
    const constructeurReponse = new responseController(url, requete, reponse);
    constructeurReponse.handleRequest();   
});

server.listen(8081, () => {
    console.log('Serveur démarré sur http://localhost:8080');
});