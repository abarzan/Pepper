// import express from 'express';
const express = require('express');
// import bparser from 'body-parser';
const bparser = require('body-parser');

const product = require('./routes/product.route');

// vars
const user = 'pepper';
const pass = 'encryptedPassRightAY'; //preporodjenje

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = `mongodb://${user}:${pass}@ds253783.mlab.com:53783/mungos-test`;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bparser.json());
app.use(bparser.urlencoded({extended: false}));
app.use('/products', product);

const port = 7007;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});