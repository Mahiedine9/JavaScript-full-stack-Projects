export default class IOController{

    #io;
    #clients;
    
    constructor(io){
        this.#io = io;
        this.#clients = new Map();  
    }

    connection(socket ){
        this.#clients.set(socket.id, 'toto');
        this.registerSocket(socket);
        socket.emit('ping', socket.id);
    } 

    setupListeners(io) {
        io.on( 'connection'  , socket => this.connection(socket) );
        io.on('pong', chaine => 
            console.log(`received pong from ${chaine}`)
        );

    }

    registerSocket(socket) {
        console.log(`new connection with id ${socket.id}`);
    }
     




    
    









} 