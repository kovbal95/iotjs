//not_implemented //-good //-finisd
/*es6 //formed
	let fibonacci = function* (numbers) {
		let pre = 0, cur = 1
		while (numbers-- > 0) {
			[ pre, cur ] = [ cur, pre + cur ]
			yield cur
		}
	}

	for (let n of fibonacci(1000))
		console.log(n)

	let numbers = [ ...fibonacci(1000) ]

	let [ n1, n2, n3, ...others ] = fibonacci(1000)
*/

/*
	//  no equivalent in ES5
*/




var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 800000
for (var i=0;i<N;i++) {
	//not_implemented
	var fibonacci = function* (numbers) {
		var pre = 0, cur = 1
		while (numbers-- > 0) {
			[ pre, cur ] = [ cur, pre + cur ]
			yield cur
		}
	}
}
console.log((Date.now()-start)/1000);
