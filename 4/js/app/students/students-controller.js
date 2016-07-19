	angular.module('app').controller('StudentsController',['$scope', '$resource','$http', function($scope, $resource, $http) {

		$scope.students = [],
			selectedStudent = {},
			Students = $resource('http://10.6.7.75:9001/api/Students/:id', {id:'@Id'}, {
		        'update': { method:'PUT' }
		    });

		$scope.select = function(student) {
			$scope.selectedStudent = student;
		}

		$scope.saveChanges = function(student) {
			student.$update();
		}
		
		Students.query(function(students) {
			$scope.students = students;
		});

	}]);