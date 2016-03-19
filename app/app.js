(function(){

'use strict';

var app = angular.module('jneApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'Controllers']);

    app.config(['$routeProvider', function($routeProvider){
      $routeProvider.
        when('/', {
          templateUrl: 'views/Home.html',
          caseInsensitiveMatch: true,
          controller: 'HomeController'
        })
          .when('/tickets', {
          templateUrl: 'views/Home.html',
          caseInsensitiveMatch: true,
          controller: 'HomeController'
        })
        .otherwise({
          redirectTo: '/'
        });

      }])
})();