module.exports.home =
  (req, res) => {
    res.render('index', { title: 'Express' });
}

module.exports.first =
   (_,res) =>  {
      const options = {                                          
                     root : 'html',
                     headers: {     
                        'Content-Type': 'text/html',
                        'x-timestamp': Date.now(),
                        'x-sent': true
                     }
                   };
      res.sendFile('first.html', options);
}

module.exports.second =
   (_,res) =>  {
      const options = {                                          
                     root : 'html',
                     headers: {     
                        'Content-Type': 'text/html',
                        'x-timestamp': Date.now(),
                        'x-sent': true
                     }
                   };
      res.sendFile('second.html', options);
}

