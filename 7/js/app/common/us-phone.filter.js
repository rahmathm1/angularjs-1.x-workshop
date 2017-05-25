angular.module('app').filter('usPhone', function() {

  return function(input) {
    var output;
    var output = (""+input).replace(/\D/g, '');
    var output = output.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!output) ? null : "(" + output[1] + ") " + output[2] + "-" + output[3];
  }

});