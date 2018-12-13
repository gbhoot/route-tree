var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productManager');

module.exports = mongoose;