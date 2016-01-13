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