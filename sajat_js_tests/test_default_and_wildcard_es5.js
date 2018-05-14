//-not_implemented //good //finisd
/* es5
	//  lib/mathplusplus.js
	LibMathPP = {};
	for (symbol in LibMath)
	    if (LibMath.hasOwnProperty(symbol))
		LibMathPP[symbol] = LibMath[symbol];
	LibMathPP.e = 2.71828182846;
	LibMathPP.exp = function (x) { return Math.exp(x) };

	//  someApp.js
	var exp = LibMathPP.exp, pi = LibMathPP.pi, e = LibMathPP.e;
	console.log("e^{π} = " + exp(pi));
*/

if (N>500000) break;//needed

LibMath = {};
LibMath.sum = function (x, y) { return x + y };
LibMath.pi = 3.141593;

LibMathPP = {};
for (symbol in LibMath)
    if (LibMath.hasOwnProperty(symbol))
  LibMathPP[symbol] = LibMath[symbol];
LibMathPP.e = 2.71828182846;
LibMathPP.exp = function (x) { return Math.exp(x) };


var exp = LibMathPP.exp, pi = LibMathPP.pi, e = LibMathPP.e;
assert.equal(exp(pi) === 23.140700648952773, true);
