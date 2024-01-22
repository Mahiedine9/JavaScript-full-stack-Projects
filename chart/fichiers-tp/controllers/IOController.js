export default class IOController{

    #io;
    #clients;
    
    constructor(io){
        this.#io = io;
        this.#clients = new Map();  
    }

    connection(socket, userName){
        this.#clients.set(socket.id, userName);
        this.registerSocket(socket);
    } 

    setupListeners(socket) {
        socket.on( 'connection'  , user => this.connection(socket, user.name) );
    }

    registerSocket(socket) {
        console.log(`new connection with id ${socket.id}`);
    }


    
    









} 