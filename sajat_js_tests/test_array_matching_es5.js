//-not_implemented //good //finisd
/*
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;
*/



var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;
assert.equal(b, 1);
assert.equal(a, 3);
