var myApp = angular.module('SocialScriptureApp',[]);

myApp.controller('RegisterCtrl', ['$scope', '$http', function(scope, $http){
	scope.email = "junk@junk.com";
	scope.firstName = "First Name";
	scope.lastName = "Last Name";
	scope.username = "Username";
	scope.password = "Password";

	scope.postResponse = function () {
		var postData = {
			email : scope.email,
			firstName : scope.firstName,
			lastName : scope.lastName,
			userName : scope.username,
			password : scope.password
		};

		console.log("postData: ", postData);
		$http.post('php/register.php', postData).then(function(response) {
			console.log("GEE WILKERS BATMAN THEY SAID: ", response.data);
		}, function(response) {

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