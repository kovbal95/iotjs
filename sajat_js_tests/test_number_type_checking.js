//not_implemented //-good //finisd
/*es6 //formed
	Number.isNaN(42) === false
	Number.isNaN(NaN) === true
	Number.isFinite(Infinity) === false
	Number.isFinite(-Infinity) === false
	Number.isFinite(NaN) === false
	Number.isFinite(123) === true
*/



assert.equal(Number.isNaN(42), false);
assert.equal(Number.isNaN(NaN), true);
assert.equal(Number.isFinite(Infinity), false);
assert.equal(Number.isFinite(-Infinity), false);
assert.equal(Number.isFinite(NaN), false);
assert.equal(Number.isFinite(123), true);
