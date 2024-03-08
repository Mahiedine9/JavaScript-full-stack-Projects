const Task = require('../models/tasks.model').model;


module.exports.list = (_, res) =>
        Task.find()                          
        .then(allTasks => res.status(200).json(allTasks));


        
module.exports.newTask = async (req, res, _) => {
    const newTaskData = { ...req.body };
    const createdTask = await Task.create(newTaskData);
    res.status(200).json(createdTask);
} 