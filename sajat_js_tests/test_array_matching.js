//not_implemented //-good //finisd
/*
	var list = [ 1, 2, 3 ]
	var [ a, , b ] = list
	[ b, a ] = [ a, b ]
*/



var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
[ b, a ] = [ a, b ];
assert.equal(a, 3);
assert.equal(b, 1);
