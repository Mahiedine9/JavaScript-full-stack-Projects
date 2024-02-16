class IoController{

    #io;
    #auctioneer;
    #bidders;
    #alreadyAuction;
    #currentSocketOffer;  
    #currentPrice;

    
    constructor(io){
        this.#io = io;
        this.#auctioneer = null;
        this.#bidders = [];   
        this.#alreadyAuction = false;
        this.#currentSocketOffer = null;
        this.#currentPrice = null;
    }
    
    connection(socket){
        this.identifyClient(socket);
        socket.on('auctionStarted', (item, price) => this.startAuction(item, price));
        socket.on('stop', () => this.stopAuction()); 
        socket.on('placeBid', (price) => { 
            socket.broadcast.emit('offerReceived', socket.id, price);
            this.#currentSocketOffer = socket;
        });
        socket.on('currentBid', (currentBid) => this.#currentPrice = currentBid); 
    } 

    setupListeners() {
        this.#io.on( 'connection' , (socket) => this.connection(socket));  
    }

    identifyClient(socket) {
        socket.emit('identify');
        socket.on('identify', (role) =>{
            if (role === 'auctioneer'){
                this.disconnectAuctioneer(socket);
                if (!(this.#auctioneer)) { 
                    this.#auctioneer = socket;
                    console.log(`New auctioneer connected with ID ${socket.id}`);
                    socket.emit('youAreAuctioneer');
                } else {
                    socket.emit('alreadyAuctioneer');
                }
            }else if (role === 'bidder'){
                this.disconnectBidder(socket);
                this.#bidders.push(socket);
                console.log( `New bidder connected with ID ${socket.id} `);
                if (this.#alreadyAuction){
                    socket.emit('alreadyAuction');
                }
            }  
        })
        
    }
    
    getIo(){
        return this.#io;
    } 

    disconnectAuctioneer(socket){
        socket.on('disconnect', () => {
            this.#auctioneer = null;
            socket.broadcast.emit('auctioneerDisconnected');
        });      
    }

    disconnectBidder(socket){
        socket.on('disconnect', () => {
            socket.broadcast.emit('bidderDisconnected');
        });

    }



    startAuction(item, price){
        console.log(`enchere commencé, le prix est ${price} et la description est ${item}`);
        this.#io.emit('startData', item, price);
        this.#alreadyAuction = true;   
    } 


    stopAuction(){
        this.#currentSocketOffer.emit('winner', this.#currentPrice);
        this.#currentSocketOffer.broadcast.emit('stopAuction');
        this.#alreadyAuction = false;
    }
    

}



module.exports = IoController;