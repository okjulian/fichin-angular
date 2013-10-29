'use strict';

describe('Main view', function () {

	beforeEach(function () {
		browser().navigateTo('/');
	});

	it('has a green world with 480px width and 640px height', function () {
		expect(element('.container div').css('color')).toBe('rgb(51, 51, 51)');
		expect(element('.container div').css('width')).toBe('480px');
		expect(element('.container div').css('height')).toBe('640px');
	});

});
