app.factory('Config', function ($http, $rootScope) {
    return {
        make: function () {
            this.getConfigFile(function (data) {
                $rootScope.config = data[0];
            });
        },
        getConfigFile: function (callback) {
            $http.get('config.json').success(callback);
        }
    };
});

app.factory('Posts', function ($http) {
    return {
        getPosts: function (callback) {
            $http.get('/posts/posts.json').success(callback);
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
});
