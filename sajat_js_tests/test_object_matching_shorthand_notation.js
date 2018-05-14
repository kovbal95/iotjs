//not_implemented //-good //finisd
/*
	var { op, lhs, rhs } = getASTNode()
*/

if (N>2000000) break;//needed

var obj = {
	op: 1,
	lhs: 2,
	rhs: 3
};
function foo () {
	return obj;
}
var { op, lhs, rhs } = foo();
assert.equal(op === 1, true);
assert.equal(lhs === 2, true);
assert.equal(rhs === 3, true);
