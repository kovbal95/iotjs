//not_implemented //-good //finisd
/*
	const PI = 3.141593
	PI > 3.0
*/

if (N>1000000) break;//needed

const PI = 3.1415
assert.throws(
	function () {
		PI = 1;
	}
);
assert.equal(PI, 3.1415);
