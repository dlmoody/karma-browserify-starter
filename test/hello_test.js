
var hello = require('../src/hello.js');
var expect = require('chai').expect;


describe('Hello', function() {
  it('should return Hello', function() {
    expect(hello()).to.be.eql('Hello');
  })


})
