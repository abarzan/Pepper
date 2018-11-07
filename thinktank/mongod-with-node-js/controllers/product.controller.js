// import Product from '../models/product.model'
const Product = require('../models/product.model');

// no validation or sanitation
exports.test = function(request, response) {
  response.send('Why hello there from the Controller. Remmber that old crappy movie ?');
  console.log(request); 
}

exports.product_create = function (req, res) {
  let product = new Product(
      {
          name: req.body.name,
          price: req.body.price
      }
  );

  product.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully')
  })
};

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
      if (err) return next(err);
      res.send('Product udpated.');
  });
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
      if (err) return next(err);
      res.send(product);
  })
};