//not_implemented //-good //finisd
/*
	var list = [ 7, 42 ]
	var [ a = 1, b = 2, c = 3, d ] = list
	a === 7
	b === 42
	c === 3
	d === undefined
*/

if (N>1000000) break;

var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
assert.equal(a === 7, true)
assert.equal(b === 42, true)
assert.equal(c === 3, true)
assert.equal(d === undefined, true)
