const mongoose = require('mongoose');

const showsSchema = new mongoose.Schema({
    description :{type : String} ,      
    places : {type : Number,
                min : 1, 
                max : 5000, 
                default : 500,     
            } 
});





module.exports = showsSchema;



const dbConnection = require('../controllers/db.controller');
const shows = dbConnection.model('Shows',showsSchema,'shows');



module.exports.model = shows;








