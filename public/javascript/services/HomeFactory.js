(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {
		var o = {};


//DELETE review from the database.
		o.deleteReview = function(id){
			var q = $q.defer();
			$http.delete('/api/review/' + id).then(function(){
				q.resolve();
			});
			return q.promise;
		};

// This works with the DetailReviewController

		o.getReviewById = function(id){
			console.log(id);
			var q = $q.defer();
			$http.get('/api/review/' + id).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};



		o.createReviews = function(review){
			console.log(review);
			var q  = $q.defer();
			$http.post('/api/review',review).then(function(){
				q.resolve();
			});
			return q.promise;
		};

		o.getReviews = function(){
			var q  = $q.defer();
			$http.get('/api/review').then(function(res){
				//console.log(res.data);
				q.resolve(res.data);
			});
			return q.promise;
		};

//Get comment from data base
		o.getComments = function(){
			var q  = $q.defer();
			$http.get('/api/comments').then(function(res){
				//console.log(res.data);
				q.resolve(res.data);
			});
			return q.promise;
		};
//ADD a comment
		o.createComment = function(reviewId, comment){
	//	console.log(comment);
			var q= $q.defer();
			$http.post('/api/comments/' + reviewId, {commentBody: comment}).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteComment = function(comment){
			$http.delete('/api/comments/' + comment._id).success(function(res){
				//console.log(comment._id);
				q.resolve();
			});
			return q.promise;
		};


		return o;
	}
})();
