import http from 'http';
import RequestController from './controllers/requestController.js';
import { Server as IOServer } from 'socket.io';
import IOController from './controllers/IOController.js';


const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);

const io = new IOServer(server);
const ioController = new IOController(io);
ioController.setupListeners(io);
server.listen(8080);



