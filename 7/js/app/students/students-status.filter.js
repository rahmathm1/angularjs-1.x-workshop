	angular.module('app').filter('statusFilter', function() {
	    return function(input) {
	       	var output;
	       	if(input == 1)
	       		output = 'Inactive';
	       	else if(input == 2)
	       		output = 'Review pending';
	       	else if(input == 3)
	       		output = 'Active';
	       	return output;
	    };
	});