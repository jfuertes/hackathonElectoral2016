
(function(){
  angular.module('Controllers', [])
  .controller('HomeController',['$scope', '$http', function ($scope, $http) {
  	$scope.presidentes = [];
  	//Array
    $http({method:'POST',url: 'data/presidentes.json',headers : { 'Content-Type': 'application/x-www-form-urlencoded' }}).success(function(response) {
    	$scope.presidentes = $scope.shuffle(response);
    });

    $scope.shuffle = function (array) {
    	var currentIndex = array.length, temporaryValue, randomIndex;
	  	// While there remain elements to shuffle...
	  	while (0 !== currentIndex) {
	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  	}
	  	return array;
	}
  	//Desordenar el array: shufle
  	// (Math.random())*10 : numero_random
  }])
  .controller('preguntasController',['$scope', '$http', function ($scope, $http) {
  
  }])
  
   .controller('newsController',['$scope', '$http', function ($scope, $http) {
  
  }]);
  .controller('TimelineController',['$scope', function ($scope) {  }])
})();
