var App = angular.module('BucketModule', ['ngRoute', 'ngMessages']);

App.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
  .when('/dashboard', {
    templateUrl: '/partials/_dashboard.html',
    controller: 'DashController'
  })
  .when('/users/:id', {
    templateUrl: '/partials/_showUser.html',
    controller: 'ShowController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
