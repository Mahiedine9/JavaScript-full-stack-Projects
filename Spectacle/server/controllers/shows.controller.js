const shows = require('../models/shows.model').model;



module.exports.showsList = (_, res) =>
        shows.find()                          
        .then(allShows => res.status(200).json(allShows));


module.exports.newShow = async (req, res, _) => {
    const newShowData = { ...req.body };
    const existingShow = await shows.findOne({ description: newShowData.description });

    if (existingShow) {
        return res.status(400).json({ message: "Un spectacle avec cette description existe déjà." });
    }

    try {
        const createdShow = await shows.create(newShowData);
        res.status(200).json(createdShow);
    } catch (error) {
        console.error("Erreur lors de la création du spectacle :", error);
        res.status(500).json({ message: "Erreur lors de la création du spectacle" });
    }
}
        


module.exports.deleteShow = async (req, res) => {
    const showId = req.params.showId;

    try {
        const deletedShow = await shows.findByIdAndDelete(showId);
        if (!deletedShow) {
            return res.status(404).json({ message: "Spectacle non trouvé" });
        }
        res.status(200).json({ message: "Spectacle supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression du spectacle :", error);
        res.status(500).json({ message: "Erreur lors de la suppression du spectacle" });
    }
};














