//-not_implemented //good //finisd
/*
	var isNaN = function (n) {
	    return n !== n;
	};
	var isFinite = function (v) {
	    return (typeof v === "number" && !isNaN(v) && v !== Infinity && v !== -Infinity);
	};
	isNaN(42) === false;
	isNaN(NaN) === true;

	isFinite(Infinity) === false;
	isFinite(-Infinity) === false;
	isFinite(NaN) === false;
	isFinite(123) === true;
*/

if (N>800000) break;//needed

var isNaN = function (n) {
    return n !== n;
};
var isFinite = function (v) {
    return (typeof v === "number" && !isNaN(v) && v !== Infinity && v !== -Infinity);
};
assert.equal(isNaN(42), false);
assert.equal(isNaN(NaN), true);

assert.equal(isFinite(Infinity), false);
assert.equal(isFinite(-Infinity), false);
assert.equal(isFinite(NaN), false);
assert.equal(isFinite(123), true);
