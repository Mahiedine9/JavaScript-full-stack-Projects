const shows = require('../models/shows.model').model;



module.exports.showsList = (_, res) =>
        shows.find()                          
        .then(allShows => res.status(200).json(allShows));


module.exports.newShow = async (req, res, _) => {
    const newShowData = { ...req.body };
    const createdShow = await shows.create(newShowData);
    res.status(200).json(createdShow);
}












