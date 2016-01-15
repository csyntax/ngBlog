app.controller("PostController", ["$scope", "$routeParams", "$window", "Posts", function ($scope, $routeParams, $window, Posts) {
	Posts.getPost($routeParams.slug, function (post) {
		$window.document.title = post.title;
		
		$scope.post = post;
	});
}]);