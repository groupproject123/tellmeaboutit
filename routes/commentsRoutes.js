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

router.param('reviewId', function(req, res, next, reviewId){
//  console.log(reviewId, "commentsroutes 13!");
  req.body.reviewId = reviewId;
  Review.findOne({_id: reviewId})
  .populate('comment')
  .exec(function (err, result) {
    if (err) return next(err);
    //console.log("Router Param");
    next();
  });
});

//GET all the comments
router.get('/', function(req,res,next){
  Comments.find({}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

//Remove from the data base
router.delete('/:id', function(req, res, next){
  Comments.remove({_id: req.params.id})
  .exec(function(err, comments){
    console.log(req.params.id, "comments routes req params id");
    if(err) return next (err);
    res.send();
  });
});

//GET an specific review post
router.get('/',function(req,res,next){
  Review.findOne({_id:req.params.id}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

//POST comments to the database
router.post('/:reviewId', auth, function(req,res,next){
  console.log(req.body);
  var newComment = new Comments({body: req.body.commentBody}); //this new Comment is refering to the comment schema to create a new object.
  console.log(newComment);
      newComment.review = req.body.reviewId;
      newComment.user = req.payload._id;
      newComment.save(function(err,result){
      if(err) return next(err);
      Review.findOne({_id: req.body.reviewId},function(err,review){
        if(err) return next(err);
        review.comments.push(newComment);  //THIS comments IS MAKING REFERENCE TO THE SCHEMA.
        console.log(newComment);
        review.save(function(err,reviewSaved){
          if(err) return res.send({err: "Error saving review"});
          res.send(reviewSaved);
      });
    });
 });
});





module.exports = router;
