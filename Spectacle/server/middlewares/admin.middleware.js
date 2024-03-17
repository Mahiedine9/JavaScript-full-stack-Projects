
const User = require('../models/user.model').model;

const adminAuthentication = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    if (user.admin) {
      next(); 
    } else {
      return res.status(403).json({ message: 'Accès refusé : vous devez être administrateur' });
    }
  } catch (err) {
    console.error(`Erreur lors de la vérification de l'administrateur : ${err.message}`);
    return res.status(500).json({ message: 'Erreur serveur lors de la vérification de l\'administrateur' });
  }
}

module.exports = adminAuthentication;
