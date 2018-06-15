//not_implemented //-good //finisd
/*
	var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
*/



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
var { op: a, lhs: { op: b }, rhs: c } = foo();
assert.equal(a === 1, true);
assert.equal(b === 2, true);
assert.equal(c === 3, true);
