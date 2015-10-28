(function() {
	'use strict';
	angular.module('app')
	.controller('DetailReviewController', DetailReviewController);
	function DetailReviewController(HomeFactory,$state, $stateParams) {
		if($stateParams.id){ //This means, is this Id exists, run the function inside.
  HomeFactory.getReviewById($stateParams.id).then(function(res){
    vm.review= res;   //at this point I am creating a new variable.
  });
}

vm.addComment = function(){
  var comment = {
    body: vm.newComment,
    review: $stateParams.id
  };
  HomeFactory.addComment(comment).then(function(res){
    vm.newComment = '';
    vm.review.comments.push(res);
  });
};

vm.deleteComment = function(comment){
  vm.review.comments.splice(vm.review.comments.indexOf(comment), 1);
  HomeFactory.deleteComment(comment);
};



	}
})();
