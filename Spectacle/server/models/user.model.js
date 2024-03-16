const mongoose = require('mongoose');


const user = new mongoose.Schema({
    nom : {type : String, unique : true}, 
    ticket : String

});





module.exports = userSchema;


const dbConnection = require('../controllers/db.controller');
const Users = dbConnection.model('User',tasksSchema,'users');



module.exports.model = Users;


