var express = require('express');
var router = express.Router();

const jsonController = require('../controllers/json.controller');


router.get('/', jsonController.jsonResponse);
router.get('/random', jsonController.jsonRandom);














module.exports = router;













