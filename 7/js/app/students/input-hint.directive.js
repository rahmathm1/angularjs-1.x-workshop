
angular.module('app').directive('inputHint', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {

      var defaultPlaceholder = "";

      element.on('focus', function(event) {
        defaultPlaceholder =  this.placeholder;
      	this.placeholder = attr.inputHint;
      });
      element.on('blur', function(event) {
      	this.placeholder = defaultPlaceholder;
      });
    }
  };
});