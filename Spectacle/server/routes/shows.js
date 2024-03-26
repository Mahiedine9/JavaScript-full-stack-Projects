const express = require('express');
const router = express.Router();

const showsController = require('../controllers/shows.controller');


router.delete('/:showId', showsController.deleteShow);
router.get('/', showsController.showsList);
router.post('/', showsController.newShow);



module.exports = router;











