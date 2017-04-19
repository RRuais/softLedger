const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('bower_components'));

const routes = require('./server/index.route');
app.use('/', routes);


app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
