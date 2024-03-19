const mongoose = require('mongoose');



const ticketSchema = new mongoose.Schema({
    description : String, 

});

const userSchema = new mongoose.Schema({
    name : String,
    login : {
              type : String,
              required : true,
              unique : true
            },
    password : {
                type : String,
                required : true
               },
    admin : {
              type : Boolean,
              default: false
            }, 
    ticket : [ticketSchema]
});





module.exports = userSchema;


const dbConnection = require('../controllers/db.controller');
const Users = dbConnection.model('User',userSchema,'users');
const Tickets = dbConnection.model('Ticket', ticketSchema, 'tickets')


module.exports.model = Users;
module.exports.ticketModel = Tickets;

