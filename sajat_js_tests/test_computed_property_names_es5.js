//-not_implemented //good //finisd
/*
	var obj = {
	    foo: "bar"
	};
	obj[ "baz" + quux() ] = 42;
*/

if (N>2000000) break;//needed

var a = "bar";
var obj = {};
obj[ "baz" + a ] = 42;
assert.equal(obj.bazbar, 42);
