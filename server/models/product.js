var mongoose = require('../config/mongoose.js'),
    validators = require('mongoose-validators');

var ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 3},
    price: {type: Number, required: true, min: 0.01},
    imgURL: {type: URL, required: true, validate: validators.isURL()}
}, {timestamps: true});

var Products = mongoose.model('Product', ProductSchema);

module.exports = Products;