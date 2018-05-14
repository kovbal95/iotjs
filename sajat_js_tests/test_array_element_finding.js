//not_implemented //-good //finisd
/*es6 //formed
	[ 1, 3, 4, 2 ].find(x => x > 3) // 4
	[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
*/

if (N>800000) break;//needed

assert.equal([ 1, 3, 4, 2 ].find(x => x > 3), 4); // 4
assert.equal([ 1, 3, 4, 2 ].findIndex(x => x > 3), 2); // 2
