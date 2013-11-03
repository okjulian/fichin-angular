'use strict';

angular.module('fichinAngularApp')
  .directive('jugador', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      replace: 'true',
      link: function postLink(scope, element, attrs) {
		  element.css({
			  'width': attrs.ancho + 'px',
			  'height': attrs.alto + 'px',
			  'position': 'absolute',
			  'top': '0px',
			  'background-image': 'url(' + attrs.imagen + ')'
		  });
      }
    };
  });
