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
       when('/detalles/:id', {
        templateUrl: 'views/timeline.html',
        caseInsensitiveMatch: true,
        controller: 'TimelineController' }).
       when('/preguntas', {
        templateUrl: 'views/preguntas.html',
        caseInsensitiveMatch: true,
        controller: 'preguntasController' }).
       when('/onpe', {
        templateUrl: 'views/onpe.html',
        caseInsensitiveMatch: true,
        controller: 'onpeController' }).
       when('/news', { 
        templateUrl: 'views/news.html', 
        caseInsensitiveMatch: true, 
        controller: 'newsController' }).
       
      otherwise({ 

        redirectTo: '/' });
    }]);
})();