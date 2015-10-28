(function() {
	'use strict';
	angular.module('app')
	.controller('DetailReviewController', DetailReviewController);
	function DetailReviewController(HomeFactory,$state, $stateParams) {

    var vm = this;
    vm.comment = {};

		if(!$stateParams.id) $state.go('Home');//This means, is this Id exists, run the function inside.
		console.log($stateParams.id);
   HomeFactory.getReviewById($stateParams.id).then(function(res){
    vm.review = res;   //at this point I am creating a new variable.
   });


//Add Comments
//vm.addComment = function(){
  // var comment = {
  //   body: vm.newComment,
  //   review: $stateParams.id
  // };

vm.addComment = function(){
  HomeFactory.createComment(vm.review._id, vm.newComment).then(function(res){
		vm.newComment = {};
		vm.review.comments.push(res);
  });
};


// vm.deleteComment = function(comment){
//   vm.review.comments.splice(vm.review.comments.indexOf(comment), 1);
//   HomeFactory.deleteComment(comment);
// };


	}
})();
