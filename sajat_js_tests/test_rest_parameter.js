//not_implemented //-good //finisd
/*
	function f (x, y, ...a) {
		return (x + y) * a.length
	}
	f(1, 2, "hello", true, 7) === 9
*/

if (N>800000) break;//needed

function f (x, y, ...a) {
	return (x + y) * a.length;
}
assert.equal(f(1, 2, "hello", true, 7) === 9, true);
