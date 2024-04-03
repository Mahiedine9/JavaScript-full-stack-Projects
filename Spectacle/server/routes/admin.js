const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authentication.middleware');
const adminMiddleware = require('../middlewares/admin.middleware'); 
const adminController = require('../controllers/admin.controller'); 


router.get('/', authMiddleware.validToken, adminMiddleware, adminController.adminPage);


module.exports = router