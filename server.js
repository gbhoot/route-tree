var express = require('express'),
    path = require('path');

var app = express();

app.use(express.static(__dirname, './public/dist/public'));

require('./server/config/routes.js')(app);

app.listen(8000);