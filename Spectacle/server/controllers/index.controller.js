

module.exports.login =
   (_,res) =>  {
      const options = {                                          
                     root : '../client',
                     headers: {     
                        'Content-Type': 'text/html',
                        'x-timestamp': Date.now(),
                        'x-sent': true
                     }
                   };
      res.sendFile('login.html', options);
}


