const mongoose = require('mongoose');

const spectacleSchema = new mongoose.Schema({
    description :{type : String, unique : true} ,      
    places : {type : Number,
                min : 1, 
                max : 5000, 
                default : 500,     
            } 
});





module.exports = spectacleSchema;























