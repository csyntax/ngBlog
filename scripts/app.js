'use strict';

angular.module('blogApp', ['ngProgress', 'ng'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html'
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
