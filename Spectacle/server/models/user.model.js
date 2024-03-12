const mongoose = require('mongoose');


const user = new mongoose.Schema({
    nom : {type : String, unique : true}, 
    ticket : String

});


module.exports = userSchema;

