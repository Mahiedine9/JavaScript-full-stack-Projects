class IoController{

    #io;
    #clients;
    #auctioneer;
    #bidders;  

    
    constructor(io){
        this.#io = io;
        this.#auctioneer = null;
        this.#bidders = [];   
    }
    
    connection(socket){
        this.identifyClient(socket); 

        /*ioServer.on('disconnect', () => {
            console.log(`Client with ID ${socket.id} disconnected.`);
        }); */
        
    } 

    setupListeners() {
        this.#io.on( 'connection'  , (socket) => this.connection(socket));      
    }

    identifyClient(socket) {
        socket.emit('identify');
        socket.on('identify', (role) =>{
            if (role === 'auctioneer'){
                if (!this.#auctioneer) { 
                    this.#auctioneer = socket;
                    console.log(`New auctioneer connected with ID ${socket.id}`);
                    socket.emit('youAreAuctioneer');
                } else {
                    socket.emit('alreadyAuctioneer');
                }
            }else if (role === 'bidder'){
                this.#bidders.push(socket);
                console.log('New bidder connected with ID ${socket.id}');
            }  
        })


    }
    
    getIo(){
        return this.#io;
    } 

    

} 

module.exports = IoController;