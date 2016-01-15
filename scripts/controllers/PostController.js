app.controller("PostController", ["$scope", "$routeParams", "$window", "Post", function ($scope, $routeParams, $window, Post) {
	Post.getPost($routeParams.slug, function (post) {
		$window.document.title = post.title;

		$scope.post = post;
	});
}]);