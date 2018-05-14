//-not_implemented //good //finisd
/*
	//  only in ES5 through the help of object properties
	//  and only in global context and not in a block scope
	Object.defineProperty(typeof global === "object" ? global : window, "PI", {
	    value:        3.141593,
	    enumerable:   true,
	    writable:     false,
	    configurable: false
	})
	PI > 3.0;
*/

if (N>1000000) break;//needed

Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
});
PI = 1;
assert.equal(PI, 3.141593);
