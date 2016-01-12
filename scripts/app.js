var app = angular.module("ngBlog", ["ngRoute"]);	

app.factory("Page", ["$http", function ($http) {
	return {
		getPages: function (callback) {
			$http.get("pages.json").success(callback);
		},
		getPage: function (slug, callback) {
			this.getPages(function (data) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].slug === slug) {
						callback(data[i]);
					}
				}
			});
		}
	}
}]);

app.directive("page", ["$http", function ($http) {
	return {
		restrict: "A",
		scope: {
		  link: "@"
		},
		link: function (scope, element, attrs) {
			attrs.$observe("link", function (link) {
				if (link) {
					$http.get("/pages/" + link).success(function (response) {
						element.html(response);
					});
				}
			});
		}
	};
}]);

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