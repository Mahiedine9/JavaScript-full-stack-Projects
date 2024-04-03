var express = require('express');
var router = express.Router();

const authMiddleware = require('../middlewares/authentication.middleware');



const indexController = require('../controllers/index.controller')

router.get('/', authMiddleware.validToken , indexController.login);
router.get('/admin.html', authMiddleware.validToken , indexController.login)






module.exports = router;
