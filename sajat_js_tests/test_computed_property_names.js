//not_implemented //-good //finisd
/*
	let obj = {
		foo: "bar",
		[ "baz" + quux() ]: 42
	}
*/

if (N>2000000) break;//needed

var a = "bar";
var obj = {
	[ "baz" + a ]: 42
}
assert.equal(obj.bazbar, 42);
