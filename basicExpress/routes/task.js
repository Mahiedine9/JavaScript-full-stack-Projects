var express = require('express');
var router = express.Router();

const taskController = require('../controllers/task.controller');

router.get('/',taskController.list)
router.post('/', taskController.newTask);
router.get('/:some_task_id', taskController.delete);

module.exports = router;




















