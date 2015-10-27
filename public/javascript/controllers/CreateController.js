(function() {
	'use strict';
	angular.module('app')
	.controller('CreateController', CreateController);
	function CreateController(HomeFactory,$state) {
		var vm = this;
		vm.review={};

    vm.addReviews = function(){
	console.log(vm.review);
      HomeFactory.createReviews(vm.review).then(function(){
        $state.go('Home');
      });
    };
	}
})();
