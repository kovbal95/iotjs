//-not_implemented //good //finisd
/*
	function mathTrunc (x) {
	    return (x < 0 ? Math.ceil(x) : Math.floor(x));
	}
	console.log(mathTrunc(42.7)) // 42
	console.log(mathTrunc( 0.1)) // 0
	console.log(mathTrunc(-0.1)) // -0
*/

if (N>1000000) break;//needed

function mathTrunc (x) {
    return (x < 0 ? Math.ceil(x) : Math.floor(x));
}
assert.equal(mathTrunc(42.7) === 42, true); // 42
assert.equal(mathTrunc( 0.1) === 0, true); // 0
assert.equal(mathTrunc(-0.1) === -0, true); // -0
