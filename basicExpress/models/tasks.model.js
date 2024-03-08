const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    description :{type : String, unique : true} ,      
    urgency : {type : Number,
                min : 1, 
                max : 5, 
                default : 3,
                set : function(value) {
                    if (value < 1){
                        return 5;
                    } else if (value > 5){
                        return 5;
                    }  else{
                        return value;
                    }  
                } 
                   
            } 
});

module.exports = tasksSchema;


const dbConnection = require('../controllers/db.controller');
const Tasks = dbConnection.model('Task',tasksSchema,'tasks');



module.exports.model = Tasks;