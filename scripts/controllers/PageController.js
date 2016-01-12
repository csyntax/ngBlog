app.controller("PageController", ["$scope", "$routeParams", "Page", function ($scope, $routeParams, Page) {
	Page.getPage($routeParams.slug, function (page) {
		$scope.page = page;
	});
}]);