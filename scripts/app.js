var app = angular.module("ngBlog", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false).hashPrefix("!");

	$routeProvider
		.when("/", {
			templateUrl: "views/posts.html",
			controller: "PostsController"
		})
		.when("/posts/:slug", {
			templateUrl: "views/post.html",
			controller: "PostController"
		})
		.when("/pages/:slug", {
			templateUrl: "views/page.html",
			controller: "PageController"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);