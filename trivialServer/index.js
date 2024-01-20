const http = require('http');
const HtmlResponseBuilder = require('./controller/HtmlResponseBuilder');
const JsonResponseBuilder = require('./controller/JsonResponseBuilder');
const ResponseBuilder = require('./controller/ResponseBuilder');


const server = http.createServer((requete, reponse) => {
    const url = requete.url;
    let constructeurReponse;

    if (url === '/json') {
        const donneesJson = { message: 'Bonjour, JSON !' };
        constructeurReponse = new JsonResponseBuilder(requete, reponse, 200, donneesJson);
    } else {
        const contenuHtml = '<h1>Bonjour, le Monde !</h1>';
        constructeurReponse = new HtmlResponseBuilder(requete, reponse, 200, contenuHtml);
    }

    constructeurReponse.handleRequest();
});

server.listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080');
});
