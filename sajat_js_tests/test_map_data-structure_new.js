//not_implemented //-good //finisd
/*es6 //formed
	let m = new Map()
	//let s = Symbol()
	m.set("hello", 42)
	//m.set(s, 34)
	//m.get(s) === 34
	m.size === 2
	for (let [ key, val ] of m.entries())
		console.log(key + " = " + val)
*/



var m = new Map();
var s = Symbol();
m.set(s, 34);
assert.equal(m.get(s) === 34, true);
