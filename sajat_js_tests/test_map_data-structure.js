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

if (N>1000000) break;//needed

var m = new Map()
m.set("hello", 42)
assert.equal(m.size === 1, true);
assert.equal(m.get("hello") === 42, true);
