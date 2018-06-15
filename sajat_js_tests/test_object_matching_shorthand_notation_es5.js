//-not_implemented //good //finisd
/*
	var tmp = getASTNode();
	var op  = tmp.op;
	var lhs = tmp.lhs;
	var rhs = tmp.rhs;
*/



var obj = {
	op: 1,
	lhs: 2,
	rhs: 3
};
function foo () {
	return obj;
}
var tmp = foo();
var op  = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;
assert.equal(op === 1, true);
assert.equal(lhs === 2, true);
assert.equal(rhs === 3, true);
