var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comments = mongoose.model('Comments');
var Review = mongoose.model('Review');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty:'payload',
  secret:'secret'
});



router.get('/',function(req,res,next){
  console.log(req.params.id);
  Review.findOne({_id:req.params.id}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.post('/:id', auth, function(req,res,next){
  var comment = {
    body:req.body.body,
    user:req.payload._id
  };

      Review.findOne({_id: req.params.id},function(err,review){
        if(err) return next(err);
        review.comments.push(comment);
        review.save(function(err,reviews){
          res.send(review);
    });
  });
});







module.exports = router;
