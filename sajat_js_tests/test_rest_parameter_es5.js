//-not_implemented //good //finisd
/*
	function f (x, y) {
	    var a = Array.prototype.slice.call(arguments, 2);
	    return (x + y) * a.length;
	};
	f(1, 2, "hello", true, 7) === 9;
*/



function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
assert.equal(f(1, 2, "hello", true, 7) === 9, true);
