const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    description :{type : String, required : true,ObjectId } ,      
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

const Task = mongoose.model('Task', tasksSchema);

module.exports = Task;