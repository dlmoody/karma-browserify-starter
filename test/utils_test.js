'use strict'

var utils = require('../src/utils');

var chai = require('chai')
  , expect = chai.expect
  , sinon = require('sinon')
  , sinonChai = require('sinon-chai');


describe("utils", function() {
  var arr;

  beforeEach(function() {
    arr = [3, 5, 6, 7];
  });

  afterEach(function() {
    arr = null;
  });

  describe("remove", function() {
    it("remove the indicated element", function() {
      expect(utils.remove(arr, 5)).to.eql([3, 6, 7]);
    });
  });
});
