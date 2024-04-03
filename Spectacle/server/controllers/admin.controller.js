const User = require('../models/user.model').model;






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




