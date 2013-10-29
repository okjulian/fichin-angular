'use strict';

describe('Directive: mundo', function () {

  // load the directive's module
  beforeEach(module('fichinAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mundo></mundo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mundo directive');
  }));
});
