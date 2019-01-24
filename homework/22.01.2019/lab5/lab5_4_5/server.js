let express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  mustacheExpress = require('mustache-express');

app.use(bodyParser.urlencoded({ extended: false })); 
app.set('views', __dirname + '/views'); 
app.engine('mustache', mustacheExpress()); 
app.set('view engine', 'mustache'); 

app.use(express.static('public'));

app.post('/login', (req, res, next)=>{ 
	res.render('index', {login: `${JSON.stringify(req.body.login)}`,
						  pass: `${JSON.stringify(req.body.pass)}`,
						  mail: `${JSON.stringify(req.body.email)}`});
});

app.listen(3000);