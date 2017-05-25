	angular.module('app').controller('StudentsController',['$scope', 'StudentsService', 
									function($scope, StudentsService) {

		$scope.students = [],
			$scope.selectedStudent = {};

		$scope.samplePhoneNumber = "1126984703";
		$scope.sampleName = "tom hanks";

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
			if(student.id) {
				StudentsService.edit(student).then(function (response) {
					$scope.selectedStudent = {};
					alert('Record  with name ' + student.firstName + ' has been updated');
				}, errorHandler);
			} else {
				StudentsService.create(student).then(function (response) {
					$scope.selectedStudent = {};
					alert('New record with name ' + student.firstName + ' is created');
					fetchAllStudents();
				}, errorHandler);
			}
		}

		$scope.delete = function(student, index) {
			if(confirm("Are you sure?")) {
				StudentsService.delete(student.id).then(function (response) {
					$scope.students.splice(index, 1);
					alert(student.firstName + ' has been deleted');
				}, errorHandler);
			}
		}

		fetchAllStudents();
	}]);