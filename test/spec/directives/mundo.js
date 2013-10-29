'use strict';

describe('Directive: mundo', function () {

	// load the directive's module
	beforeEach(module('fichinAngularApp'));

	var element,
	scope;

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
	}));

	it('deberia crear un mundo con altura y ancho determinados', inject(function ($compile) {
		element = angular.element('<mundo ancho="360" alto="240"></mundo>');
		element = $compile(element)(scope);
		scope.$apply();
		expect(element.css('width')).toBe('360px');
		expect(element.css('height')).toBe('240px');
	}));

	it('deberia crear un mundo con un fondo de color', inject(function ($compile) {
		element = angular.element('<mundo ancho="360" alto="240" color="red"></mundo>');
		element = $compile(element)(scope);
		scope.$apply();
		expect(element.css('background-color')).toBe('red');
	}));

});
