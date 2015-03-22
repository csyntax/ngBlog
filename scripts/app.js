"use strict";

var app = angular.module('PostsJS', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/posts/:postTitle', {
      templateUrl: 'views/post.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
