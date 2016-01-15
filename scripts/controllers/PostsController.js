app.controller("PostsController", ["$scope", "$window","Posts", function ($scope, $window, Posts) {
    $window.document.title = "Home";

    Posts.getPosts(function (posts) {
        $scope.posts = posts;
    });
}]);