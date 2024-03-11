const Task = require('../models/tasks.model').model;


module.exports.list = (_, res) =>
        Task.find()                          
        .then(allTasks => res.status(200).json(allTasks));


        
module.exports.newTask = async (req, res, _) => {
    const newTaskData = { ...req.body };
    const createdTask = await Task.create(newTaskData);
    res.status(200).json(createdTask);
} 

module.exports.delete  =
    async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.some_task_id);
    if (!deletedTask) {
        return res.status(404).json({ message: "Tâche introuvable" });
    }

    res.status(200).json({ message: "Tâche supprimée avec succès", deletedTask });

    
} 