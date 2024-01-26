export default class IOController{

    #io;
    #clients;
    
    constructor(io){
        this.#io = io;
        this.#clients = new Map();  
    }

    getClients(){
        return this.#clients;
    } 
    
    connection(socket){
        this.#clients.set(socket.id, 'toto');
        this.registerSocket(socket);
        this.#io.emit('ping', socket.id);
    } 

    setupListeners(ioServer) {
        ioServer.on( 'connection'  , (socket) => this.connection(socket));
        ioServer.on('pong', chaine => 
            console.log(`received pong from ${chaine}`)
        );
        setInterval(() => this.sendNumber(this.nombreAleatoire(2, 8)), 2000);
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