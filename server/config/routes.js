var path = require('path'),
    authors = require('../controllers/products.js');

module.exports = function(app) {
    app.get('/db/v1/products', function(req, res) {
        authors.getAll(req, res);
    });

    app.get('/db/v1/products/:id', function(req, res) {
        authors.getOne(req, res);
    });

    app.post('/db/v1/products', function(req, res) {
        authors.create(req, res);
    });

    app.put('/db/v1/products/:id', function(req, res) {
        authors.update(req, res);
    });

    app.delete('/db/v1/products', function(req, res) {
        authors.destroyAll(req, res);
    });

    app.delete('/db/v1/products/:id', function(req, res) {
        authors.destroyOne(req, res);
    });

    app.all("**", function(req, res, next) {
        res.sendFile(path.resolve(__dirname, '../../public/dist/public/index.html'));
    });
}