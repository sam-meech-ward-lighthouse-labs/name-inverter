var invertName = require('../name-inverter.js');
var assert = require('assert');


describe('invertName', function() {
  it('should return "Cage, Nick" when given "Nick Cage"', function() {
    assert.equal("Cage, Nick", invertName("Nick Cage"));
  });

  it('should return empty string when given empty string', function() {
    assert.equal("", invertName(""));
  });

  it('should return that name string when given one name', function() {
    assert.equal("Joel", invertName("Joel"));
  });
});

  
// var name = "Nick Cage";
// var invertedName = invertName(name);
// console.log(invertedName);