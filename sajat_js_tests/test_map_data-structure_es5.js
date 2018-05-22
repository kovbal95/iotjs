//-not_implemented //good //finisd
/*
	var m = {};
	// no equivalent in ES5
	m["hello"] = 42;
	// no equivalent in ES5
	// no equivalent in ES5
	Object.keys(m).length === 2;
	for (key in m) {
	    if (m.hasOwnProperty(key)) {
				var val = m[key];
				console.log(key + " = " + val);
	    }
	}
*/

if (N>1000000) break;

var m = {};
m["hello"] = 42;
assert.equal(Object.keys(m).length === 1, true);
assert.equal(m["hello"] === 42, true);
