app.controller("PostController", ["$scope", "$routeParams", "Posts", function ($scope, $routeParams, Posts) {
	Posts.getPost($routeParams.slug, function (post) {
		$scope.post = post;
	});
}]);