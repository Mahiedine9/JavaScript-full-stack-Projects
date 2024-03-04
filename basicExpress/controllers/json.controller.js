const moment = require('moment');

module.exports.jsonResponse = (req, res) => {
    const { value, color } = req.query;

    const responseObject = {
        value,
        color,
        date: moment().format() 
    };


    res.json(responseObject);
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports.jsonRandom = (req, res) => {

    const data = {
        randomValue: getRandomArbitrary(0,100)
    };
    res.json(data);
} 








