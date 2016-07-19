angular.module('app').service('StudentsService', ['$http', 'CommonService', '$q', function($http, CommonService, $q) {
	var baseUrl = CommonService.baseUrl + '/Students/',
		processServerResponse = function(data) {
			angular.forEach(data, function(value, key) {
			 	value['Status'] = Math.floor(Math.random() * 3) + 1 ;
			});	
			return data;	
		};

	this.getAll = function() {
		var processedData, deferred = $q.defer();
		$http({
			method: 'GET',
			url: baseUrl
		}).then(function (response) {
			processedData = processServerResponse(response.data);
			deferred.resolve(processedData);
		}, function (response) {
			deferred.reject(response);
		});
		return deferred.promise;
	};

	this.get = function(id) {
		return $http({
			method: 'GET',
			url: baseUrl + id
		});
	};

	this.delete = function(id) {
		var deferred = $q.defer();
		return $http({
			method: 'DELETE',
			url: baseUrl + id
		});
	};

	this.edit = function(data) {
		return $http({
			method: 'PUT',
			url: baseUrl + data.Id,
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