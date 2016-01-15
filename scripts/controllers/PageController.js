app.controller("PageController", ["$scope", "$routeParams", "$window", "Page", function ($scope, $routeParams, $window, Page) {
	Page.getPage($routeParams.slug, function (page) {
		$window.document.title = page.title;
		$scope.page = page;
	});
}]);