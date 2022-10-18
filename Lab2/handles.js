const url = require('url')
const qs = require('querystring')

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    if(params['name']==='Benjamin'){
        res.write('Nom : Guyon ')
        res.write('Prenom : benjamin  Age : 21 ans  Ville de naissance : Marseille')
    }
    else if(params['name']==='Titouan'){
        res.write('Nom : Garreta  Prenom : Titouan  Age : 21 ans  Ville de naissance : Perpignan')
    }
    else {
        res.write('hello ' + params['name'])
    }
  }
  else if(path === '/about'){
    jsonfile = require('./content/about.json')
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(jsonfile))
  }
  else {
    res.write('Error 404')
  }
  
  res.end();
    }
  }  