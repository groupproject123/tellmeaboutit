var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var jwt = require('express-jwt');

router.post('/',function(req,res,next){
  console.log(req.body);
  var description = new Review(req.body);
  description.save(function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

//DELETE Review from the database.
router.delete('/:id', function(req, res, next){
  Review.remove({_id: req.params.id}, function(err, result){
    if(err) return next (err);
    res.send();
  });
});

router.get('/:id', function(req, res, next){
  console.log(req.params.id);
  Review.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    res.send(result);
  });
});



router.get('/:id',function(req,res,next){
  Review.findOne({_id:req.params.id}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.put('/', function(req, res, next){
  console.log(req.body);
  Review.update({_id: req.body.reviewId}, req.body.edittedReview, function(err, result){
    if(err)return next(err);
  });
});


router.get('/', function(req,res,next){
  Review.find({}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});




module.exports = router;
