(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);



	function HomeFactory($http, $q) {
		var o = {};



		o.getReviewById = function(id){
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
				console.log(res.data);
				q.resolve(res.data);
			});
			return q.promise;
		};


		o.addComment = function(comment, reviewId){
			var q= $q.defer();
			$http.post('/api/comments/' + reviewId, comment).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteComment = function(comment){
			$http.delete('/api/comments/' + comment._id).success(function(res){
				q.resolve(res);
			});
			return q.promise;
		};


		return o;
	}
})();
