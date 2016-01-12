app.factory("Config", ["$http", "$rootScope", function ($http, $rootScope) {
	return {
		getConfigFile: function (callback) {
			$http.get("config.json").success(callback);
		},
		make: function () {
			this.getConfigFile(function (data) {
				$rootScope.config = data;
			});
		}     
	};
}]);

app.factory("Posts", ["$http", function ($http) {
	return {
		getPosts: function (callback) {
			$http.get("posts.json").success(callback);
		},
		getBySlug: function (slug, callback) {
			this.getPosts(function (data) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].slug === slug) {
						callback(data[i]);
					}
				}
			});
		}
	};
}]);
