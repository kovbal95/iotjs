//-not_implemented //good //finisd
/*
	var dest = { quux: 0 };
	var src1 = { foo: 1, bar: 2 };
	var src2 = { foo: 3, baz: 4 };
	Object.keys(src1).forEach(function(k) {
	    dest[k] = src1[k];
	});
	Object.keys(src2).forEach(function(k) {
	    dest[k] = src2[k];
	});
	dest.quux === 0;
	dest.foo  === 3;
	dest.bar  === 2;
	dest.baz  === 4;
*/



var dest = { quux: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };
Object.keys(src1).forEach(function(k) {
    dest[k] = src1[k];
});
Object.keys(src2).forEach(function(k) {
    dest[k] = src2[k];
});
assert.equal(dest.quux === 0, true);
assert.equal(dest.foo === 3, true);
assert.equal(dest.bar === 2, true);
assert.equal(dest.baz === 4, true);
