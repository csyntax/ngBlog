app.controller("BaseController", ["$scope", "Config", function ($scope, Config) {
    $scope.Config = Config;

    Config.make();
}]);