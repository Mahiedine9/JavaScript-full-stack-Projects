const http = require('http');
const HtmlResponseBuilder = require('./controller/HtmlResponseBuilder');
const JsonResponseBuilder = require('./controller/JsonResponseBuilder');
const ResponseBuilder = require('./controller/ResponseBuilder');
const InvalideResponse = require('./controller/InvalideResponse');
const JsonRandomResponse = require('./controller/JsonRandomResponse');
const FileResponseBuilder = require('./controller/FileResponseBuilder');

const server = http.createServer((requete, reponse) => {
    const url = requete.url;
    let constructeurReponse;

    if (url.startsWith('/json')) {
        constructeurReponse = new JsonResponseBuilder(requete, reponse, 200, 'application/json');
    }
    else if (url.startsWith('/random')) {
        constructeurReponse = new JsonRandomResponse(requete, reponse, 200, 'application/json');
    }

    else if ((url == '/first') || (url == '/second')  ) {
        const contenuHtml = '<h1>Bonjour, le Monde !</h1>';
        constructeurReponse = new HtmlResponseBuilder(requete, reponse, 200, contenuHtml);
    }
    else if (url.startsWith('/public')){
        constructeurReponse = new FileResponseBuilder(requete, reponse, 200, 'text/plain');
    } 
    
    else{
        const contenuHtml = '<h1>err</h1>';
        constructeurReponse = new InvalideResponse(requete, reponse,404, contenuHtml);
    } 

    constructeurReponse.handleRequest();
});

server.listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080');
} );  
