"use strict";

var app = angular.module('PostsJS', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider
    .when('/', {
      templateUrl: '_views/home.html'
    })
    .when('/posts/:postTitle', {
      templateUrl: '_views/post.html'
    })
    .when('/about', {
      templateUrl: '_views/about.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
