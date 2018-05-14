//-not_implemented //good //finisd
/*
	console.log(0.1 + 0.2 === 0.3); // false
	console.log(Math.abs((0.1 + 0.2) - 0.3) < 2.220446049250313e-16); // true
*/

if (N>4000000) break;//needed

assert.equal(0.1 + 0.2 === 0.3, false); // false
assert.equal(Math.abs((0.1 + 0.2) - 0.3) < 2.220446049250313e-16, true); // true
