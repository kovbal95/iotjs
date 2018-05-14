//not_implemented //-good //finisd
/*es6 //formed
	Number.isSafeInteger(42) === true
	Number.isSafeInteger(9007199254740992) === false
*/

if (N>1000000) break;//needed

assert.equal(Number.isSafeInteger(42), true);
assert.equal(Number.isSafeInteger(9007199254740992), false);
