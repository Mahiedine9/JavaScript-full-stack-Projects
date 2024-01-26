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
        this.getIo().emit('number', n);
    } 
     




    
    









} 