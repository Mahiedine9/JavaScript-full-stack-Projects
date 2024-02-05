class IoController{

    #io;
    #clients;

    
    constructor(io){
        this.#io = io;
    }
    
    connection(socket){
        const ioServer = this.#io;
        this.registerSocket();

        /*ioServer.on('disconnect', () => {
            console.log(`Client with ID ${socket.id} disconnected.`);
        }); */
        
    } 

    setupListeners() {
        this.#io.on( 'connection'  , (socket) => this.connection(socket));      
    }

    registerSocket() {
        console.log(`new connection with id`);
    }
    
    getIo(){
        return this.#io;
    } 

    

} 

module.exports = IoController;