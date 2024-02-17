class IoController{

    #io;
    #auctioneer;
    #bidders;
    #alreadyAuction;
    #currentSocketOffer;  
    #currentPrice;
    #lateBidders;

    
    constructor(io){
        this.#io = io;
        this.#auctioneer = null;
        this.#bidders = [];   
        this.#alreadyAuction = false;
        this.#currentSocketOffer = null;
        this.#currentPrice = null;
        this.#lateBidders = new Set()
    }
    
    connection(socket){
        this.identifyClient(socket);
        socket.on('auctionStarted', (item, price) => this.startAuction(item, price));
        socket.on('stop', () => this.stopAuction()); 
        socket.on('placeBid', (price) => { 
            socket.broadcast.to('room').emit('offerReceived', socket.id, price);
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
                this.disconnectClient(socket, role);
                if (this.#auctioneer == null) { 
                    this.#auctioneer = socket;
                    console.log(`New auctioneer connected with ID ${socket.id}`);
                    socket.emit('youAreAuctioneer');
                    socket.join('room');
                } else {
                    socket.emit('alreadyAuctioneer');
                }
            }else if (role === 'bidder'){
                this.disconnectClient(socket, role);
                this.#bidders.push(socket);
                console.log( `New bidder connected with ID ${socket.id} `);
                if (this.#alreadyAuction){
                    socket.join('waitRoom');
                    socket.emit('alreadyAuction');
                }else{
                    socket.join('room');
                } 
            }  
        })
        
    }
    
    getIo(){
        return this.#io;
    } 


    disconnectClient(socket, role) {
        socket.on('disconnect', () => {
            if ((role === 'auctioneer') && (this.#auctioneer === socket)) {
                this.#auctioneer = null;
                socket.broadcast.emit('auctioneerDisconnected');
                this.#alreadyAuction = false;
            } else if (role === 'bidder') {
                socket.broadcast.emit('bidderDisconnected');
            }
        });
    }






    startAuction(item, price){
        if (this.#bidders.length > 0){
            console.log(`enchere commencé, le prix est ${price} et la description est ${item}`);
            this.#io.emit('startData', item, price);
            this.#alreadyAuction = true; 
        } else{
            this.#auctioneer.emit('noBidder');
            this.#alreadyAuction = false;
        }     
    } 


    stopAuction(){
        if (this.#currentSocketOffer){
            this.#currentSocketOffer.emit('winner', this.#currentPrice);
            this.#currentSocketOffer.broadcast.to('room').emit('stopAuction');
        } else{
            this.#io.emit('stopAuctionNoOffer');
        }
        this.#io.to('waitRoom').emit('ready'); 
        this.#alreadyAuction = false;

    }

    
    

}



module.exports = IoController;