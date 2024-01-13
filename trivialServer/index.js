const http = require('http');

// création du serveur
const server = http.createServer(
	(request, response) => {
		// création et envoi de la réponse
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write('Premier minimal code');
		response.end('bye');
	}
);

server.listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080');
});
