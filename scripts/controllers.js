app.controller("Main", function ($scope, $window, $routeParams, Config, Posts) {
    $scope.Config = Config;
    $scope.Posts = Posts.query;

    Config.make();

    $scope.$on("$routeChangeSuccess", function ($currentRoute, $previousRoute) {
        if ($routeParams.postTitle) {
            Posts.getBySlug($routeParams.postTitle, function (post) {
                $scope.post = post;
                $window.document.title = $scope.post.title + " - " + $scope.config.title;
            });
        } else {
            $window.document.title = $scope.config.title + " - " + $scope.config.description;
            Posts.getPosts(function (posts) {
                $scope.posts = posts;
            });
        }
    });
});

app.controller("BaseController", ["$scope", "Config", function ($scope, Config) {
    $scope.Config = Config;

    Config.make();
}]);

app.controller("PostsController", ["$scope", "Posts",function ($scope, Posts) {
    

    Posts.getPosts(function (posts) {
        $scope.posts = posts;
    });
}]);

app.controller("PostController",["$scope", "$routeParams", "Posts", function ($scope, $routeParams, Posts) {
     Posts.getBySlug($routeParams.postTitle, function (post) {
        $scope.post = post;
    });
}]);