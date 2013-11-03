'use strict';

describe('Directive: jugador', function () {

  // load the directive's module
  beforeEach(module('fichinAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('deberia tener una imagen asociada', inject(function ($compile) {
    element = angular.element('<jugador imagen="/img/tyrion.png" ancho="120" alto="150"></jugador>');
    element = $compile(element)(scope);
	scope.$apply();
    expect(element.css('background-image')).toContain('/img/tyrion.png');
    expect(element.css('position')).toBe('absolute');
    expect(element.css('top')).toBe('0px');
    expect(element.css('width')).toBe('120px');
    expect(element.css('height')).toBe('150px');
  }));

  it('deberia poder moverse con las teclas wasd', inject(function ($compile) {
    element = angular.element('<jugador imagen="/img/tyrion.png" ancho="120" alto="150"></jugador>');
    element = $compile(element)(scope);
	scope.$digest();
	browserTrigger($window, 'keydown', {'keys': 68});
    expect(element.css('background-image')).toContain('/img/tyrion.png');
  }));
  it('solo deberia poder moverse dentro de los limites de una directiva <mundo>', function () {});
});
