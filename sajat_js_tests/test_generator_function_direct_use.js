//not_implemented //-good //-finisd
/*es6 //formed
	function* range (start, end, step) {
		while (start < end) {
			yield start
			start += step
		}
	}

	for (let i of range(0, 10, 2)) {
		console.log(i) // 0, 2, 4, 6, 8
	}
*/

/*
	function range (start, end, step) {
	    var list = [];
	    while (start < end) {
		list.push(start);
		start += step;
	    }
	    return list;
	}

	var r = range(0, 10, 2);
	for (var i = 0; i < r.length; i++) {
	    console.log(r[i]); // 0, 2, 4, 6, 8
	}
*/




var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 800000
for (var i=0;i<N;i++) {
	//not_implemented
	function* range (start, end, step) {
		while (start < end) {
			yield start
			start += step
		}
	}
}
console.log((Date.now()-start)/1000);
