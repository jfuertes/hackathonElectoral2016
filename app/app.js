(function(){
  angular.module('jneApp', [ 'ngRoute',  'angular-flipclock', 'Controllers'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/', { 
        templateUrl: 'views/home.html', 
        caseInsensitiveMatch: true, 
        controller: 'HomeController' }).
       when('/home', { 
        templateUrl: 'views/home.html', 
        caseInsensitiveMatch: true, 
        controller: 'HomeController' }).
       when('/preguntas', { 
        templateUrl: 'views/preguntas.html', 
        caseInsensitiveMatch: true, 
        controller: 'preguntasController' }).
       
      otherwise({ 
        redirectTo: '/' });
    }]);
})();