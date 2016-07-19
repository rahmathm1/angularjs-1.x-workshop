	angular.module('app').controller('StudentsController',['$scope', 'StudentsService', 
									function($scope, StudentsService) {

		$scope.students = [],
			$scope.selectedStudent = {};

		var errorHandler = function(response) {
				alert('An error occured' + response);
			},
			fetchAllStudents = function() {
				StudentsService.getAll().then(function(response) {
					$scope.students = response.data;
				}, errorHandler);
			};


		$scope.select = function(student) {
			$scope.selectedStudent = student;
		}

		$scope.saveChanges = function(student) {
			if(student.Id) {
				StudentsService.edit(student).then(function (response) {
					$scope.selectedStudent = {};
					alert('Changes has been saved');
				}, errorHandler);
			} else {
				StudentsService.create(student).then(function (response) {
					$scope.selectedStudent = {};
					alert('New record is created');
					fetchAllStudents();
				}, errorHandler);
			}
		}

		$scope.delete = function(student, index) {
			StudentsService.delete(student.Id).then(function (response) {
				$scope.students.splice(index, 1);
				alert(student.FirstName + ' has been deleted');
			}, errorHandler);
		}

		fetchAllStudents();
	}]);