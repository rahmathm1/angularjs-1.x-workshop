angular.module('app').factory('CommonService', function($http) {
	return {
		baseUrl: 'http://10.6.7.75:9001/api'
	};
});