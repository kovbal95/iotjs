//not_implemented //-good //finisd
/*
	function f ([ name, val ]) {
		console.log(name, val)
	}
	function g ({ name: n, val: v }) {
		console.log(n, v)
	}
	function h ({ name, val }) {
		console.log(name, val)
	}
	f([ "bar", 42 ])
	g({ name: "foo", val: 7 })
	h({ name: "bar", val: 42 })
*/



function f ([ name, val ]) {
	return [name, val];
}
function g ({ name: n, val: v }) {
	return [n, v]
}
function h ({ name, val }) {
	return [name, val]
}
assert.equal(JSON.stringify(f([ "bar", 42 ])) === JSON.stringify([ "bar", 42 ]), true)
assert.equal(JSON.stringify(g({ name: "foo", val: 7 })) === JSON.stringify([ "foo", 7 ]), true)
assert.equal(JSON.stringify(h({ name: "bar", val: 42 })) === JSON.stringify([ "bar", 42 ]), true)
