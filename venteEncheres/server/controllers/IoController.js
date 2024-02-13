class IoController{

    #io;
    #auctioneer;
    #bidders;
    #alreadyAuction;  

    
    constructor(io){
        this.#io = io;
        this.#auctioneer = null;
        this.#bidders = [];   
        this.#alreadyAuction = false;
    }
    
    connection(socket){
        this.identifyClient(socket);
        socket.on('auctionStarted', (item, price) => this.startAuction(item, price));
        socket.on('stop', () => this.stopAuction()); 
        socket.on('placeBid', (price) => socket.broadcast.emit('offerReceived', socket.id, price)); 
    } 

    setupListeners() {
        this.#io.on( 'connection' , (socket) => this.connection(socket));  
    }

    identifyClient(socket) {
        socket.emit('identify');
        socket.on('identify', (role) =>{
            if (role === 'auctioneer'){
                if (!(this.#auctioneer)) { 
                    this.#auctioneer = socket;
                    console.log(`New auctioneer connected with ID ${socket.id}`);
                    socket.emit('youAreAuctioneer');
                } else {
                    socket.emit('alreadyAuctioneer');
                }
            }else if (role === 'bidder'){
                this.#bidders.push(socket);
                console.log( `New bidder connected with ID ${socket.id} `);
                if (this.#alreadyAuction){
                    socket.emit('alreadyAuction');
                }
            }  
        })
        socket.on('disconnect', () => {
            console.log(`Client with ID ${socket.id} disconnected.`);
            this.#auctioneer = null; 
        });
    }
    
    getIo(){
        return this.#io;
    } 

    startAuction(item, price){
        console.log(`enchere commencé, le prix est ${price} et la description est ${item}`);
        this.#io.emit('startData', item, price);
        this.#alreadyAuction = true;   
    } 


    stopAuction(){
        this.#io.emit('stopAuction');
    }
    

}



module.exports = IoController;