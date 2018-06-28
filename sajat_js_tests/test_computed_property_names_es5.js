//-not_implemented //good //finisd
/*
	var obj = {
	    foo: "bar"
	};
	obj[ "baz" + quux() ] = 42;
*/



var a = "bar";
var obj = {};
obj[ "baz" + a ] = 42;
assert.equal(obj.bazbar, 42);
