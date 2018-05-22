//-not_implemented //good //finisd
/*
	var s = {};
	s["hello"] = true; s["goodbye"] = true; s["hello"] = true;
	Object.keys(s).length === 2;
	s["hello"] === true;
	for (var key in s) // arbitrary order
	    if (s.hasOwnProperty(key))
	        console.log(s[key]);
*/

if (N>500000) break;//needed

var s = {};
s["hello"] = true; s["goodbye"] = true; s["hello"] = true;
assert.equal(Object.keys(s).length === 2, true);
assert.equal(s["hello"] === true, true);
for (var key in s) // arbitrary order
    if (s.hasOwnProperty(key))
        assert.equal(s[key], true);
