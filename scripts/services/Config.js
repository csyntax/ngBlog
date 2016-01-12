var Config = function ($http, $rootScope) {
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
};