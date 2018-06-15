//-not_implemented //good //finisd
/*
	function mathSign (x) {
	    return ((x === 0 || isNaN(x)) ? x : (x > 0 ? 1 : -1));
	}
	console.log(mathSign(7))   // 1
	console.log(mathSign(0))   // 0
	console.log(mathSign(-0))  // -0
	console.log(mathSign(-7))  // -1
	console.log(mathSign(NaN)) // NaN
*/



function mathSign (x) {
    return ((x === 0 || isNaN(x)) ? x : (x > 0 ? 1 : -1));
}
assert.equal(mathSign(7) === 1, true)   // 1
assert.equal(mathSign(0) === 0, true)   // 0
assert.equal(mathSign(-0) === -0, true)  // -0
assert.equal(mathSign(-7) === -1, true)  // -1
assert.equal(mathSign(NaN).toString() === "NaN", true) // NaN
