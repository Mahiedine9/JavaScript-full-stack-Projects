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
            
            socket.on('identify', (user) => {
                this.#users.set(socket.id, user);
                socket.emit('userData', user); // Envoyer les données utilisateur à l'utilisateur connecté
            });
        });
    }

    getIo() {
        return this.#io;
    } 
}

module.exports = IoController;
