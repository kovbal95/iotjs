//-not_implemented //good //finisd
/* es5
//  lib/math.js
LibMath = {};
LibMath.sum = function (x, y) { return x + y };
LibMath.pi = 3.141593;

//  someApp.js
var math = LibMath;
console.log("2π = " + math.sum(math.pi, math.pi));

//  otherApp.js
var sum = LibMath.sum, pi = LibMath.pi;
console.log("2π = " + sum(pi, pi));
*/



LibMath = {};
LibMath.sum = function (x, y) { return x + y };
LibMath.pi = 3.141593;

var math = LibMath;
assert.equal(math.sum(math.pi, math.pi) === 6.283186, true);
