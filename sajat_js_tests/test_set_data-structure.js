//not_implemented //-good //finisd
/* es6 //formed
	let s = new Set()
	s.add("hello").add("goodbye").add("hello")
	s.size === 2
	s.has("hello") === true
	for (let key of s.values()) // insertion order
		console.log(key)
*/



var s = new Set();
s.add("hello").add("goodbye").add("hello");
assert.equal(s.size === 2, true);
assert.equal(s.has("hello") === true, true);
for (var key of s.values())
	assert.equal(key, true);
