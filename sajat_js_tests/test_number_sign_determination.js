//not_implemented //-good //finisd
/*es6 //formed
	console.log(Math.sign(7))  // 1
	console.log(Math.sign(0))  // 0
	console.log(Math.sign(-0))  // -0
	console.log(Math.sign(-7))  // -1
	console.log(Math.sign(NaN)) // NaN
*/



assert.equal(Math.sign(7) === 1, true)  // 1
assert.equal(Math.sign(0) === 0, true)  // 0
assert.equal(Math.sign(-0) === -0, true)  // -0
assert.equal(Math.sign(-7) === -1, true)  // -1
assert.equal(Math.sign(NaN).toString() == "NaN", true) // NaN
