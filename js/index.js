'use strict';
var app = angular.module('MainApp', []);
app.controller('MainCtrl', ['$scope', function($scope){
  $scope.data = {
    firstName: "",
    lastName: ""
  };
}]);