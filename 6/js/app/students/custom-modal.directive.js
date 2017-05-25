
angular.module('app').directive('customModal', function() {
  return {
    restrict: 'E',
    scope: {
    	student: '=student'
    },
    templateUrl: 'views/custom-modal.directive.html',
    controller: function ($scope) {
      $scope.isShown = false;
      
    }
  };
});