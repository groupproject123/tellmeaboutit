var mongoose = require('mongoose');

var ReviewSchema =  new mongoose.Schema({
  name: String,
  image: String,
  rating: String,
  description: String,
  comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comments'}]
});

mongoose.model('Review', ReviewSchema);
