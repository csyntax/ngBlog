app.controller("PostsController", ["$scope", "$window","Post", function ($scope, $window, Post) {
    $window.document.title = "Home";

    Post.getPosts(function (posts) {
        $scope.posts = posts;
    });
}]);