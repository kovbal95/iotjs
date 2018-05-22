//-not_implemented //good //finisd
/*
	function f (x, y, z) {
	    if (y === undefined)
	        y = 7;
	    if (z === undefined)
	        z = 42;
	    return x + y + z;
	};
	f(1) === 50;
*/

if (N>4000000) break;

function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
assert.equal(f(1), 50);
