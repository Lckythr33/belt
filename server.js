const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')


app.use(express.static(__dirname + '/public/dist/public'));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (req, res, next) => {
res.sendFile(path.resolve('./public/dist/public/index.html'));
}); //if route not found. kick back routes to angular


app.listen(8000, () => console.log('Localhost on 8000'));
