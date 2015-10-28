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

// router.param('/:reviewId', function(req, res, next){
//   console.log(req.body);
// });

router.get('/',function(req,res,next){
  console.log(req.params.id);
  Review.findOne({_id:req.params.id}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

// router.post('/:reviewId', auth, function(req,res,next){
//   console.log(req.body);
//   var comment = new Comment(req.body);
//     comment.review = req.review._id;
//     comment.save(function(err,result){
//       if(err) return next(err);
//       res.send(result);
//
//       req.review.comments.push(commentResult._id);
//       req.review.save(function(err, review){
//         console.log(review);
//         res.send(commentResult);
//       });
//     });
//  });
      // Review.findOne({_id: req.params.id},function(err,review){
      //   if(err) return next(err);
      //   review.comments.push(comment);
      //   review.save(function(err,reviews){
      //     res.send(review);









module.exports = router;
