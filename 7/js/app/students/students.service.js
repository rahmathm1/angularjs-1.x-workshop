angular.module('app').service('StudentsService', ['$http', 'CommonService', '$q', function($http, CommonService, $q) {
	
	var baseUrl = CommonService.baseUrl + '/stduents/';

	this.getAll = function() {
		return $http({
			method: 'GET',
			url: baseUrl
		});
	};

	this.get = function(id) {
		return $http({
			method: 'GET',
			url: baseUrl + id
		});
	};

	this.delete = function(id) {
		var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: baseUrl + id
		}).then(function (response) {
			deferred.resolve(response);
		}, function (response) {
			deferred.reject(response);
		});
		return deferred.promise;
	};

	this.edit = function(data) {
		return $http({
			method: 'PUT',
			url: baseUrl + data.id,
			data: data
		});
	};

	this.create = function(data) {
		return $http({
			method: 'POST',
			url: baseUrl,
			data: data
		});
	};
}]);