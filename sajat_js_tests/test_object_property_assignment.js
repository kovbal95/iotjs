//not_implemented //-good //finisd
/*es6 //formed
	var dest = { quux: 0 }
	var src1 = { foo: 1, bar: 2 }
	var src2 = { foo: 3, baz: 4 }
	Object.assign(dest, src1, src2)
	dest.quux === 0
	dest.foo === 3
	dest.bar === 2
	dest.baz === 4
*/

if (N>400000) break;//needed

var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2)
assert.equal(dest.quux === 0, true);
assert.equal(dest.foo === 3, true);
assert.equal(dest.bar === 2, true);
assert.equal(dest.baz === 4, true);
