//-not_implemented //good //finisd
/*
	[ 1, 3, 4, 2 ].filter(function (x) { return x > 3; })[0]; // 4
	// no equivalent in ES5
*/

if (N>800000) break;//needed
assert.equal([ 1, 3, 4, 2 ].filter(function (x) { return x > 3; })[0], 4); // 4
var i=0;
var t=[ 1, 3, 4, 2 ];
while (!(t[i]>3)) {
  i++;
}
assert.equal(i === 2, true);
