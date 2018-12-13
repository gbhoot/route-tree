var Product = require('../models/product.js');

module.exports = {
    getAll: function(req, res) {
        Product.find({}, function(error, products) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    products: products
                };
                res.json(response);
            };
        }.sort({title: -1}));
    },

    getOne: function(req, res) {
        let pid = req.params.id;
        Product.findOne({_id: pid}, function(error, product) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let repsonse = {
                    message: "Success",
                    product: product
                };
                res.json(response);
            };
        });
    },

    create: function(req, res) {
        let inc_pro = req.body['product'];
        let product = new Product(inc_pro);
        product.save(function(error, new_product) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    product = product
                };
                res.json(response);
            };
        });
    },

    update: function(req, res) {
        let pid = req.params.id;
        let inc_pro = req.body['product'];
        let opts = {runValidators: true};
        Product.updateOne({_id: pid}, inc_pro, opts, function(error, product) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let repsonse = {
                    message: "Success",
                    product: product
                };
                res.json(response);
            };
        });
    },

    destroyAll: function(req, res) {
        Product.deleteMany({}, function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success"
                };
                res.json(response);
            };
        });
    },

    destroyOne: function(req, res) {
        let pid = req.params.id;
        Product.deleteOne({_id: pid}, function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success"
                };
                res.json(response);
            };
        });
    }
}