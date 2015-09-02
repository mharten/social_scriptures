var myApp = angular.module('ScriptureApp',[]);

myApp.controller('ScriptureCtrl', ['$scope', function($scope) {
  $scope.book = "1-ne";
  $scope.chapter = "10";
  $scope.verse = "15";
  $scope.source = "https://www.lds.org/scriptures/bofm/1-ne/2.1?lang=eng";
}]);