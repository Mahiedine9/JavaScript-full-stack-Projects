export default class IOController{

    #io;
    #clients;
    #timersId;

    
    constructor(io){
        this.#io = io;
        this.#clients = new Map();  
        this.#timersId = new Map(); 
    }

    getClients(){
        return this.#clients;
    } 
    
    connection(socket){
        const ioServer = this.#io;
        const timerId = setInterval(() => this.sendNumber(this.nombreAleatoire(2, 8)), 3000);
        this.#timersId.set(socket.id,timerId);
        this.#clients.set(socket.id, 'toto');
        this.registerSocket(socket);
        socket.emit('ping', { id: socket.id });

        socket.on('pong', (clientSocketId) => {
            console.log(`Received pong from ${clientSocketId}`);
        });


        ioServer.on('disconnect', () => {
            this.stopTimer(socket.id);
            this.#clients.delete(socket.id);
            console.log(`Client with ID ${socket.id} disconnected.`);
        });
        
    } 

    setupListeners(ioServer) {
        ioServer.on( 'connection'  , (socket) => this.connection(socket));      
    }

    registerSocket(socket) {
        console.log(`new connection with id ${socket.id}`);
    }

    nombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    getIo(){
        return this.#io;
    } 

    sendNumber(n){
        this.getIo().emit('donnee', n);
        console.log(`the number ${n} send`);
    }

    stopTimer(socketId) {
        const timerId = this.#timersId.get(socketId);
        if (timerId) {
            clearInterval(timerId);
            this.#timersId.delete(socketId);
            console.log(`Timer for client with ID ${socketId} stopped.`);
        }
    }
































/*

    version qui consiste a envoyer a tous les clients 
    un nombre different qui est generé au meme moment.
    en ajoutant a chaque nouveau client connecté un nombre entre 2 et 8, et ensuite envoyer le message
    au client avec son numero a lui.


    getClients(){
        return this.#clients;
    } 
    
    connection(socket){
        const randomNum = this.nombreAleatoire(2, 8);
        this.#clients.set(socket.id, {name : 'toto', num : randomNum});
        this.registerSocket(socket);
        this.#io.to(socket.id).emit('ping', {id: socket.id, num : randomNum});
    } 

    setupListeners(ioServer) {
        ioServer.on( 'connection'  , (socket) => this.connection(socket));
        ioServer.on('pong', chaine => 
            console.log(`received pong from ${chaine}`)
        );
        setInterval(() => this.sendNumber(), 2000);
    }

    registerSocket(socket) {
        console.log(`new connection with id ${socket.id}`);
    }

    nombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    getIo(){
        return this.#io;
    } 

    sendNumber(n){
        this.getClients().forEach((client) => {
            const { name, randomNum } = client;
            this.getIo().to(client.socketId).emit('number', { name, randomNum });
          });
    } 
*/

     




    
    
    






} 