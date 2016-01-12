var config = function ($routeProvider, $locationProvider, $httpProvider) {
	$locationProvider.html5Mode(false).hashPrefix("!");

	$routeProvider
		.when("/", {
			templateUrl: "views/home.html",
			controller: "PostsController"	
		})
		.when("/posts/:slug", {
			templateUrl: "views/post.html",
			controller: "PostController"
		})
		.when("/about", {
			templateUrl: "views/about.html",
			controller: "PageController"
		})
		.otherwise({
			redirectTo: "/"
		});
};