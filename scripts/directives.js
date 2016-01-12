app.directive("markdown", ["$http", function ($http) {
	var converter = new showdown.Converter();

	return {
		restrict: "A",
		scope: {
		  link: "@"
		},
		link: function (scope, element, attrs) {
			attrs.$observe("link", function (link) {
				if (link) {
					$http.get("/posts/" + link).success(function (response) {
						var htmlText = converter.makeHtml(response);
						element.html(htmlText);
					});
				}
			});
		}
	};
}]);