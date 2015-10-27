var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var jwt = require('express-jwt');


router.get('/', function(req,res,next){
  Review.find({}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});


router.post('/',function(req,res,next){
  console.log(req.body);
  var description = new Review(req.body);
  description.save(function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});















module.exports = router;
