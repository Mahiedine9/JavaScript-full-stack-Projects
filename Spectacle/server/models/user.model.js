const mongoose = require('mongoose');


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
    ticket : String
});





module.exports = userSchema;


const dbConnection = require('../controllers/db.controller');
const Users = dbConnection.model('User',userSchema,'users');



module.exports.model = Users;


