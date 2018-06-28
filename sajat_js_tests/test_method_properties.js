//not_implemented //-good //finisd
/*
	obj = {
		foo (a, b) {
			…
		},
		bar (x, y) {
			…
		},
		*quux (x, y) {
			…
		}
	}
*/



obj = {
	foo (a, b) {
		return a+b
	}
}
assert.equal(obj.foo(1, 2) === 3, true);
