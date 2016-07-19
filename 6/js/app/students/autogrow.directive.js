
angular.module('app').directive('autoGrow', function() {
  return {
    restrict: 'A',
    //scope: {},
    link: function (scope, element, attr) {
      element.on('mouseover', function(event) {
      	this.style.width = 200;
      });
      element.on('mouseout', function(event) {
      	this.style.width = 'auto';
      });
    }
  };
});