app.directive("markdown", ["$http", function ($http) {
	var converter = new showdown.Converter();

	return {
		restrict: "A",
		scope: {
		  link: "@"
		},
		link: function (scope, element, attrs, controller) {
			attrs.$observe("link", function (link) {
				if (link) {
					var post = "/posts/" + link + ".md";
					$http.get(post).success(function (response) {
						var htmlText = converter.makeHtml(response);
						element.html(htmlText);
					});
				}
			});
		}
	};
}]);