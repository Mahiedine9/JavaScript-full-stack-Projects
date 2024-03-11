var express = require('express');
var router = express.Router();

const taskController = require('../controllers/task.controller');

router.get('/',taskController.list)
router.post('/', taskController.newTask);
router.delete('/:some_task_id', taskController.delete);
router.post('/create/:desc/:urgency', taskController.create);
module.exports = router;




















