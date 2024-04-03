const User = require('../models/user.model').model;



module.exports.adminPage2 = async (req, res) => {
    try {
      res.redirect('/admin.html');
    } catch (error) {
      console.error(`Erreur lors de l'accès à la page d'administration : ${error.message}`);
      res.status(500).json({ message: 'Erreur serveur lors de l\'accès à la page d\'administration' });
    }
    
};


module.exports.adminPage =
   (_,res) =>  {
      const options = {
                     root: 'public',
                     headers: {
                       'x-timestamp': Date.now(),
                       'x-sent': true
                     }
                   };
      res.sendFile('admin.html', options);
} 




