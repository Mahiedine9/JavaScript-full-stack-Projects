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

module.exports.create = async (req, res) => {
    const { description, urgency } = req.body;

    try {
        const createdTask = await Task.create({ description, urgency });
        res.status(201).json({ message: "Tâche créée avec succès", task: createdTask });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la tâche", error });
    }
}