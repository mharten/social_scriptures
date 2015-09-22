var myApp = angular.module('EveryGoodSeed',[]);

myApp.controller('StudyCtrl', ['$scope', '$http', function(scope, $http){
	scope.chapter = "1 Nephi 3";
	scope.verses = getVerses();
	scope.comments = "";
	scope.replies = "";

	scope.viewComments = function(index) {
		scope.selectedVerse = index;
		scope.selectedReply = "";
		scope.comments = getComments();
	}

	scope.viewVerses = function() {
		scope.selectedVerse = "";
		scope.selectedComment = "";
	}

	scope.viewReplies = function(index) {
		scope.selectedComment = index;
		scope.replies = getReplies();
		console.log("scope.replies: ", scope.replies);
	}

	scope.openModal = function() {
		scope.showCommentBox = true;
	}

	function getVerses() {
		var verses = [
		{number: 1, text:"And it came to pass that I, Nephi, returned from speaking with the Lord, to the tent of my father."},
		{number: 2, text:"And it came to pass that he spake unto me, saying: Behold I have dreamed a dream, in the which the Lord hath commanded me that thou and thy brethren shall return to Jerusalem."},
		{number: 3, text:"For behold, Laban hath the record of the Jews and also a genealogy of my forefathers, and they are engraven upon plates of brass."},
		{number: 4, text:"Wherefore, the Lord hath commanded me that thou and thy brothers should go unto the house of Laban, and seek the records, and bring them down hither into the wilderness."},
		{number: 5, text:"And now, behold thy brothers murmur, saying it is a hard thing which I have required of them; but behold I have not required it of them, but it is a commandment of the Lord."},
		{number: 6, text:"Therefore go, my son, and thou shalt be favored of the Lord, because thou hast not murmured."},
		{number: 7, text:"And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them."},
		{number: 8, text:"And it came to pass that when my father had heard these words he was exceedingly glad, for he knew that I had been blessed of the Lord."},
		{number: 9, text:"And I, Nephi, and my brethren took our journey in the wilderness, with our tents, to go up to the land of Jerusalem."},
		{number: 10, text:"And it came to pass that when we had gone up to the land of Jerusalem, I and my brethren did consult one with another."},

		];
		return verses;
	};

	function getComments() {
		var comments = [
		{number: 1, text:"I really love this verse"},
		{number: 2, text:"This verse is awesome"},
		{number: 3, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar non mi in volutpat. Vestibulum ante ipsum primis in faucibus."},
		{number: 4, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in."},
		{number: 5, text:"And now, behold thy brothers murmur, saying it is a hard thing which I have required of them; but behold I have not required it of them, but it is a commandment of the Lord."},
		{number: 6, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar non mi in volutpat. Vestibulum ante ipsum primis in faucibus."},
		{number: 7, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in."},
		{number: 8, text:"And it came to pass that when my father had heard these words he was exceedingly glad, for he knew that I had been blessed of the Lord."},
		{number: 9, text:"And I, Nephi, and my brethren took our journey in the wilderness, with our tents, to go up to the land of Jerusalem."}
		];
		return comments;
	};

	function getReplies() {
		var replies = [
		{author: "Michael Harten", dateSubmitted: "10/24/2014", text:"I really love this comment"},
		{author: "Ryan Gillett", dateSubmitted: "10/25/2014",  text:"I love this comment more"},
		{author: "Kyle Stewart", dateSubmitted: "10/25/2014",  text:"Gurlz!"}
		];
		return replies;
	};
}]);

