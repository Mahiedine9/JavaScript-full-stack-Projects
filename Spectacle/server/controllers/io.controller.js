class IoController {
    #io;
    #users; 

    constructor(io) {
        this.#io = io;
        this.#users = new Map();   
    }

    setupListeners() {
        this.#io.on('connection', (socket) => {
            console.log(`User connecté avec l'id : ${socket.id}`);
            this.#users.set(socket.id);
            
        });
    }

    getIo() {
        return this.#io;
    } 
}

module.exports = IoController;
