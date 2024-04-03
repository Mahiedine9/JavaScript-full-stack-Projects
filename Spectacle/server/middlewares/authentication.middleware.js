const User = require('../models/user.model').model;

const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

const validToken = (req, res , next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, jwtConfig.SECRET_TOKEN);
    console.log(`decoded :${decoded.id}`);
    req.userId = decoded.id;   
    next();
  }
  catch (err) {
    console.log(`erreur JWT : ${err.message}`);
    if (req.headers['sec-fetch-dest'] === 'empty') { // req comes from a fetch() ?
      console.log('sec-fetch-dest: EMPTY');
      res.status(401).json({ redirectTo : '/access/login'});
    } else {
      res.status(301).redirect('/access/login');
      console.log(`sec-fetch-dest: ${req.headers['sec-fetch-dest'].toUpperCase()}`);
      
    }
  }
}



const adminAuthentication = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (user.admin) {
    next();
  }
  else {
    res.status(401).json({ message: 'Admin : accès refusé' });
  }
}

module.exports.validToken = validToken;
module.exports.isAdmin = adminAuthentication;
