(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);



	function HomeFactory($http, $q) {
		var o = {};



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


		return o;
	}
})();
