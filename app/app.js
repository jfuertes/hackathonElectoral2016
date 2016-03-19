(function(){

  angular.module('jneApp', [ 'ngRoute',  'Controllers'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/', { templateUrl: 'views/home.html', caseInsensitiveMatch: true, controller: 'HomeController' }).
      otherwise({ redirectTo: '/' });
    }]);
})();