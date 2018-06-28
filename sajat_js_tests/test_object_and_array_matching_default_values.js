//not_implemented //-good //finisd
/*
	var obj = { a: 1 }
	var list = [ 1 ]
	var { a, b = 2 } = obj
	var [ x, y = 2 ] = list
*/



var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;

assert.equal(a === 1, true);
assert.equal(b === 2, true);
assert.equal(x === 1, true);
assert.equal(y === 2, true);
