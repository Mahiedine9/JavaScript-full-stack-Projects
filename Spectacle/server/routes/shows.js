const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authentication.middleware');
const showsController = require('../controllers/shows.controller');


router.delete('/:showId', showsController.deleteShow);
router.get('/',  showsController.showsList);
router.post('/', showsController.newShow);
router.get('/:showId', showsController.show);



module.exports = router;











