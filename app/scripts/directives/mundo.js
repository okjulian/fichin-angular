'use strict';

angular.module('fichinAngularApp')
.directive('mundo', function () {
	return {
		template: '<div></div>',
		restrict: 'E',
		replace: 'true',
		scope: {
			ancho: '=ancho',
			alto: '=alto'
		},
		link: function postLink(scope, element, attrs) {
			element.css('width', scope.ancho + 'px');
			element.css('height', scope.alto + 'px');
			element.css('background-color', attrs.color);
		}
	};
});
