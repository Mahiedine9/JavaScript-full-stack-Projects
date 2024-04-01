const User = require('../models/user.model').model;
const Shows = require('../models/shows.model').model;
const Ticket = require('../models/user.model').ticketModel;

module.exports.home = (_,res) => res.redirect('/user.html');

module.exports.me =
  async (req, res) =>  {
    const user = await User.findById(req.userId);
    console.log(user);
    console.log(req.userId);
    res.status(200).json({ name : user.name, id : user._id });
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


module.exports.removeTicket = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    } 

    user.tickets = user.tickets.filter(ticket => ticket._id.toString() !== req.params.ticketId);

    await user.save();

    await Ticket.findByIdAndDelete(req.params.ticketId);

    res.status(200).json({ message: "Ticket supprimé avec succès" });

  } catch (error) {
    console.error("Erreur lors de la suppression du ticket :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du ticket" });
  } 
} 


 

module.exports.takeTicket = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
      
    }

    const show = await Shows.findById(req.params.showId);

    if (!show) {
      console.log("je suis la 2");
      return res.status(404).json({ message: "Spectacle non trouvé" });
    }

    if (show.places == 0) {
      return res.status(400).json({ message: "Plus de places disponibles pour ce spectacle" });
    } else{
      show.places--;
    } 

    

    const newTicket = new Ticket({ description: show.description });

    user.tickets.push(newTicket);

    await user.save();
    await show.save();

    res.status(200).json({ message: "Ticket réservé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la réservation du ticket :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la réservation du ticket" });
  }
}


module.exports.tickets = async (req, res) => {
  try {
    const userId = req.params.user_id; 
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    const tickets = await user.tickets;
    res.status(200).json(tickets);
} catch (error) {
    res.status(500).json({ message: error.message });
}



}
