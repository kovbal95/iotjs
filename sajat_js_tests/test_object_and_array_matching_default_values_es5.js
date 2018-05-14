//-not_implemented //good //finisd
/*
	var obj = { a: 1 };
	var list = [ 1 ];
	var a = obj.a;
	var b = obj.b === undefined ? 2 : obj.b;
	var x = list[0];
	var y = list[1] === undefined ? 2 : list[1];
*/

if (N>1000000) break;//needed

var obj = { a: 1 };
var list = [ 1 ];
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];

assert.equal(a === 1, true);
assert.equal(b === 2, true);
assert.equal(x === 1, true);
assert.equal(y === 2, true);
