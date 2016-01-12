app.controller("BaseController", ["$scope", "Config", function ($scope, Config) {
    $scope.Config = Config;

    Config.make();
}]);

app.controller("PostsController", ["$scope", "Posts", function ($scope, Posts) {
    Posts.getPosts(function (posts) {
        $scope.posts = posts;
    });
}]);

app.controller("PostController",["$scope", "$routeParams", "Posts", function ($scope, $routeParams, Posts) {
    Posts.getBySlug($routeParams.slug, function (post) {
        $scope.post = post;
    });
}]);

app.controller("PageController", function () {

});