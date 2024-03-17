const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authentication.middleware');
const adminMiddleware = require('../middlewares/admin.middleware'); // Importez le middleware admin
const adminController = require('../controllers/admin.controller'); // Importez le contrôleur de l'administrateur

// Route pour la page d'administration accessible uniquement aux administrateurs
router.get('/', authMiddleware.validToken, adminMiddleware, adminController.adminPage);

module.exports = router