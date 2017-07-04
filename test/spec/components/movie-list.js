'use strict';

describe('Component: movieList', function () {

  beforeEach(module('angularComponentsPocApp'));

  var movieList,
    scope;

  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    movieList = $componentController('movieList', {
      $scope: scope
    });
  }));

  it('can be created', function () {
    expect(movieList).toBeDefined();
    expect(movieList.$onInit).toBeDefined();
  });
});
