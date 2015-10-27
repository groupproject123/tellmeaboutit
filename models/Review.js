var mongoose = require('mongoose');

var ReviewSchema =  new mongoose.Schema({
  name: String,
  image: String,
  rating: String,
  description: String
});

mongoose.model('Review', ReviewSchema);
