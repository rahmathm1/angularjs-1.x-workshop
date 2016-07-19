
angular.module('app').directive('ageCategory', function() {
  return {
    restrict: 'E',
    scope: {
    	student: '=student'
    },
    templateUrl: 'views/age-catagory-directive.html',
    link: function (scope, element, attr) {
    }
  };
});