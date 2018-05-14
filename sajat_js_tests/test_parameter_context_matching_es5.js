//-not_implemented //good //finisd
/*
	function f (arg) {
	    var name = arg[0];
	    var val  = arg[1];
	    console.log(name, val);
	};
	function g (arg) {
	    var n = arg.name;
	    var v = arg.val;
	    console.log(n, v);
	};
	function h (arg) {
	    var name = arg.name;
	    var val  = arg.val;
	    console.log(name, val);
	};
	f([ "bar", 42 ]);
	g({ name: "foo", val:  7 });
	h({ name: "bar", val: 42 });
*/

if (N>100000) break;//needed

function f (arg) {
    var name = arg[0];
    var val  = arg[1];
    return [name, val];
};
function g (arg) {
    var n = arg.name;
    var v = arg.val;
    return [n, v];
};
function h (arg) {
    var name = arg.name;
    var val  = arg.val;
    return [name, val];
};
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });
assert.equal(JSON.stringify(f([ "bar", 42 ])) === JSON.stringify([ "bar", 42 ]), true)
assert.equal(JSON.stringify(g({ name: "foo", val: 7 })) === JSON.stringify([ "foo", 7 ]), true)
assert.equal(JSON.stringify(h({ name: "bar", val: 42 })) === JSON.stringify([ "bar", 42 ]), true)
