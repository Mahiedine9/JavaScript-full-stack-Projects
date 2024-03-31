const User = require('../models/user.model').model;



module.exports.adminPage = async (req, res) => {
    try {
      res.redirect('/admin.html');
    } catch (error) {
      console.error(`Erreur lors de l'accès à la page d'administration : ${error.message}`);
      res.status(500).json({ message: 'Erreur serveur lors de l\'accès à la page d\'administration' });
    }
    
  };




