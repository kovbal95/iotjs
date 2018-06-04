//not_implemented //-good //finisd
/*
	function f (x, y = 7, z = 42) {
		return x + y + z
	}
	f(1) === 50
*/

if (N>4000000) break;//needed

function f (x, y=7, z=42) {
    return x + y + z;
};
assert.equal(f(1), 50);
