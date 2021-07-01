const dbConfigs = require('./../configs/db.configs');
const mongoose = require('mongoose');
const initProduct = require('./product.model');
const db = {};

// Config database url & mongoose
db.url = dbConfigs.DATABASE_URL;
db.mongoose = mongoose;

// Initial models
db.Product = initProduct(mongoose);


module.exports = db;