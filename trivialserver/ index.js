import http from 'http';

const server = http.createServer(
    (request, response) => {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('premier minimal code ');
        response.end();
    }
);
server.listen(8080);




