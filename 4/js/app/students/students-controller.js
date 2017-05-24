	angular.module('app').controller('StudentsController',['$scope', '$resource','$http', function($scope, $resource, $http) {

		$scope.students = [];
		var Student = $resource('http://localhost:3000/api/stduents/:id', {id:'@id'}, {
		        'update': { method:'PUT' }
		    });
		$scope.selectedStudent = new Student();

		var getStudents = function() {
			Student.query(function(students) {
				$scope.students = students;
			});
		}

		$scope.select = function(student) {
			$scope.selectedStudent = student;
		}

		$scope.saveChanges = function(student) {
			if(student.id)
				student.$update(function() {
					alert("Student record with id "+ student.id + " updated successfully.");
					getStudents();
				});
			else {
				student.$save(function() {
					alert("New student record has been inserted");
					getStudents();
				});
			}
		}
		$scope.delete = function(student) {
			if(confirm("Are you sure?"))
				student.$delete(function() {
					getStudents();
				});
		}
		
		getStudents();

	}]);