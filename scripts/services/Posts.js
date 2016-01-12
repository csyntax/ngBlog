var Posts = function ($http) {
	return {
		getPosts: function (callback) {
			$http.get("posts.json").success(callback);
		},
		getPost: function (slug, callback) {
			this.getPosts(function (data) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].slug === slug) {
						callback(data[i]);
					}
				}
			});
		}
	};
};