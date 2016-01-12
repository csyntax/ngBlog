var BaseController = function ($scope, Config) {
    $scope.Config = Config;

    Config.make();
};