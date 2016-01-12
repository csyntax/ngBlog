app.controller("PostsController", ["$scope", "Posts", function ($scope, Posts) {
    Posts.getPosts(function (posts) {
        $scope.posts = posts;
    });
}]);