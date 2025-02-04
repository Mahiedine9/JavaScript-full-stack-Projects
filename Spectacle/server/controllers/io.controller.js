const User = require('../models/user.model').model;
const Shows = require('../models/shows.model').model;
const Ticket = require('../models/user.model').ticketModel;

class IoController {
    #io;
    #users;
    #allUsers; 



    constructor(io) {
        this.#io = io;
        this.#users = new Map(); 
        this.#allUsers = new Map();  
    }

    setupListeners() {
        
        this.#io.on('connection', (socket) => {
            this.connection(socket);
            console.log(`User connecté avec l'id : ${socket.id}`);
            this.#users.set(socket.id); 
        });
        
        
        this.#io.on('buy', (showId) => {
            this.#io.emit('showBought', showId);        
        });
        
    }

    connection(socket) {
        socket.on('userConnected', () => {
            console.log('User connecté');
            this.#users.set(socket.id);
        });
        socket.on('adminConnected', () => {
            console.log('Admin connecté');
            this.#users.set(socket.id);
        });
        socket.on('disconnect', () => {
            console.log(`User déconnecté avec l'id : ${socket.id}`);
            this.#users.delete(socket.id);
        });
        socket.on('deleteShow', (desc) => {
            console.log(`Le spectacle ${desc} a été supprimé`);
            this.#io.emit('showDeleted', desc);
            this.deleteTicket(desc);
        });
    }
        

    async deleteTicket(description) {
        try {
            const allUsers = await User.find();
            for (const user of allUsers) {
                user.tickets = user.tickets.filter(ticket => ticket.description !== description);
                await user.save();
            }

        } catch (error) { 
            console.error(`Erreur : ${error.message}`);
        }
    } 

    getIo() {
        return this.#io;
    } 
}

module.exports = IoController;
