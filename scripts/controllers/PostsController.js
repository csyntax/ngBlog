var PostsController = function ($scope, Posts) {
    Posts.getPosts(function (posts) {
        $scope.posts = posts;
    });
};