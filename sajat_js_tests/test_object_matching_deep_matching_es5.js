//-not_implemented //good //finisd
/*
	var tmp = getASTNode();
	var a = tmp.op;
	var b = tmp.lhs.op;
	var c = tmp.rhs;
*/

if (N>1000000) break;//needed

var obj = {
	op: 1,
	lhs: {
		op: 2,
	},
	rhs: 3,
};
function foo() {
	return obj;
}
var tmp = foo();
var a = tmp.op;
var b = tmp.lhs.op;
var c = tmp.rhs;
assert.equal(a === 1, true);
assert.equal(b === 2, true);
assert.equal(c === 3, true);
