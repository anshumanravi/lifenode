'use strict';

/* Directives */


angular.module('lifenode.directives', [])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])

	
	.directive('nodeCircle', function(){
		return {
			scope: {
				clickCallback: '&',
				options: '='
			},
			restrict: 'E',
			link: function (scope, element){
				element.bind('mouseenter',function() {
					console.log('MOUSE ENTER: ' );
				});
				element.bind('mouseleave',function() {
					console.log('LEAVE');
				});
			},
			template:
			'<div class="circle">' +
		'<div class="outer-circle"></div>' +
		'<div class="middle-circle"></div>'+
		'<div class="inner-circle">lifenode</div>' +
		'</div>',
		};
	});



	