angular
.module("avengersApp")
.controller("MainCtrl", function($scope, dataService){


$scope.getHeroes = function(){
  $scope.avengers = dataService.avengers();
};


// $scope.avengers = dataService.avengers;



}); //end of main controller
