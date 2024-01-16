const http = require('http');

const server = http.createServer(
	(request, response) => {
		const url = request.url;
		let responseBuilder;
        if (url === '/json') {
            const jsonData = { message: 'Hello, JSON!' };
            responseBuilder = new JsonResponseBuilder(request, response, 200, jsonData);
        } else {
            responseBuilder = new ResponseBuilder(request, response, 200, 'text/plain');
    }
	}
);

server.listen(8080, () => {
    console.log('Serveur démarré sur http://localhost:8080');
});
