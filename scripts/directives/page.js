app.directive("page", ["$http", function ($http) {
	return {
		restrict: "A",
		scope: {
			link: "@"
		},
		link: function (scope, element, attrs, controller) {
			attrs.$observe("link", function (link) {
				if (link) {
					var page = "/pages/" + link + ".html";
					
					$http.get(page).success(function (response) {
						element.html(response);
					});
				}
			});
		}
	};
}]);