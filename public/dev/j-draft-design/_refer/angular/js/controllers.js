//var jDraft = angular.module('jDraft', ['ngRoute']);
var jDraft = angular.module('jDraft', []);

jDraft.controller('MainCtrl',  ['$scope', '$filter', '$http', '$window', function($scope, $filter, $http, $window) {
	$scope.thumbs = [
		{
			"href" : "#",
			"imgSrc" : "harim.jpg",
			"title" : "하림푸드"
		},
		{
			"href" : "#",
			"imgSrc" : "jungwoneshop.jpg",
			"title" : "정원샵"
		},
		{
			"href" : "#",
			"imgSrc" : "samsung_a.jpg",
			"title" : "삼성 무선 A"
		},
		{
			"href" : "#",
			"imgSrc" : "samsung_b.jpg",
			"title" : "삼성 무선 B"
		},
		{
			"href" : "#",
			"imgSrc" : "sehwa_a.jpg",
			"title" : "세화 미술관 A"
		},
		{
			"href" : "#",
			"imgSrc" : "sehwa_b.jpg",
			"title" : "세화 미술관 B"
		}
	];

	$scope.evtListener = {
		srch : function() {
			console.log( $scope.srchText );
		}
	};
}]);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['jDraft']);
});
