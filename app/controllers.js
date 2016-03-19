/**
 * List Controller
 * @version v1.0.0 - 2016-02-08 * @link http://www.mindtec.pe
 * @author MindTec <contacto@mindtec.pe>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(){
  'use strict';

angular.module('Controllers', [  'ngAnimate'])


 .filter('filternull', function(){
  return function(id){
    
    if(id==null){
      return " ";
    }
    else{
      return id;
    }
    };
  })


  .controller('HomeController',['$scope', '$http', function ($scope, $http) {
    
    
    /*
      $http({method:'POST',url: 'api/getProy.php',headers : { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .success(function(response) {
        console.log(response);
      })
      .error(function(response){
        console.log(response);
      });
*/
  }])
  
})();
