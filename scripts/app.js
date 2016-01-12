angular
	.module("ngBlog", ["ngRoute"])
	.directive("markdown", ["$http", markdownDirective])
	.factory("Config", ["$http", "$rootScope", Config])
	.factory("Posts", ["$http", Posts])
	.controller("BaseController", ["$scope", "Config", BaseController])
	.controller("PostsController", ["$scope", "Posts", PostsController])
	.controller("PostController", ["$scope", "$routeParams", "Posts", PostController])
	.config(["$routeProvider", "$locationProvider", "$httpProvider", config]);