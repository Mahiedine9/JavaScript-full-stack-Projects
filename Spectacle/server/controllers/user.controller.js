const User = require('../models/user.model').model;
const Shows = require('../models/shows.model').model;


module.exports.home = (_,res) => res.redirect('/user.html');

module.exports.me =
  async (req, res) =>  {
    const user = await User.findById(req.userId);
    console.log(user);
    console.log(req.userId);
    res.status(200).json({ name : user.name });
}



module.exports.update =
  async (req,res) => {
    const updatedData = { ...req.body };
    console.log(updatedData);
    const user = await User.findByIdAndUpdate(req.userId,
                                              updatedData,
                                              { new : true });
    res.status(200).json({ name : user.name , message : 'mise à jour réussie'});
}

 
module.exports.takeTicket = async (req, res) => {
  try {
      const show = await Shows.findById(req.params.showId);

      if (!show) {
          return res.status(404).json({ message: "Spectacle non trouvé" });
      }

      if (show.places <= 0) {
          return res.status(400).json({ message: "Plus de places disponibles pour ce spectacle" });
      }

      show.places--;

      await show.save();

      res.status(200).json({ message: "Ticket réservé avec succès" });
  } catch (error) {
      console.error("Erreur lors de la réservation du ticket :", error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la réservation du ticket" });
  }
}
