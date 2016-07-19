	angular.module('app').controller('StudentsController',['$scope', '$resource','$http', function($scope, $resource, $http) {

		$scope.students = [],
			selectedStudent = {};

		$scope.select = function(student) {
			$scope.selectedStudent = student;
		}

		$scope.saveChanges = function(student) {
			student.$save();
		}
		$scope.deleteStudent = function(student) {
			student.$delete();
		}

		var Students = $resource('http://10.6.7.75:8090/api/Students/:id', 
			{id:'@Id'} , 
			{headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }});
		
		Students.query(function(students) {
			$scope.students = students;
		});

	}]);