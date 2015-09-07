var myApp = angular.module('SocialScriptureApp',[]);

myApp.controller('RegisterCtrl', ['$scope', '$http', function(scope, $http){
	scope.email = "stuff@stuff.com";
	scope.firstName = "First Name";
	scope.lastName = "Last Name";
	scope.username = "Username";
	scope.password = "Password";

	scope.postResponse = function () {
	    var postData = JSON.stringify({
		"email" : scope.email,
		"firstName" : scope.firstName,
		"lastName" : scope.lastName,
		"userName" : scope.username,
		"password" : scope.password
	    });

	    $http.post('php/register.php', postData).then(function(response) {
		console.log("RESPONSE.DATA: ", response.data);
	    }, function(response) {
		console.log("ERROR RESPONSE: ", response);
	    });
	}
}]);

myApp.controller('ScriptureCtrl', ['$scope', function(scope) {
  scope.book = "1-ne";
  scope.chapter = "10";
  scope.verse = "15";
  scope.source = "https://www.lds.org/scriptures/bofm/1-ne/2.1?lang=eng";
  scope.repsonse ="";

}]);