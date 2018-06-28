//not_implemented //-good //finisd
/*
	var x = 0, y = 0
	obj = { x, y }
*/



var x = 0, y = 0
obj = { x, y }
assert.equal(JSON.stringify(obj) === JSON.stringify({x: 0, y: 0}), true);
