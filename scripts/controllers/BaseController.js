app.controller("BaseController", ["$scope", "Config", "Page", function ($scope, Config, Page) {
	$scope.Config = Config;

	Config.make();

	Page.getPages(function (pages) {
		$scope.pages = pages;
	});
}]);