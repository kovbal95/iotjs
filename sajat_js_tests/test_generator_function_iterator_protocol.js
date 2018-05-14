//not_implemented //-good //-finisd
/*es6 //formed
	let fibonacci = {
	    *[Symbol.iterator]() {
		let pre = 0, cur = 1
		for (;;) {
		    [ pre, cur ] = [ cur, pre + cur ]
		    yield cur
		}
	    }
	}

	for (let n of fibonacci) {
	    if (n > 1000)
		break
	    console.log(n)
	}
*/

/*
	var fibonacci = {
	    next: (function () {
		var pre = 0, cur = 1;
		return function () {
		    tmp = pre;
		    pre = cur;
		    cur += tmp;
		    return cur;
		};
	    })()
	};

	var n;
	for (;;) {
	    n = fibonacci.next();
	    if (n > 1000)
		break;
	    console.log(n);
*/




var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 800000
for (var i=0;i<N;i++) {
	//not_implemented
	var fibonacci = {
	    *[Symbol.iterator]() {
		var pre = 0, cur = 1
		for (;;) {
		    [ pre, cur ] = [ cur, pre + cur ]
		    yield cur
		}
	    }
	}

	for (var n of fibonacci) {
	    if (n > 1000)
		break
	    console.log(n)
	}
}
console.log((Date.now()-start)/1000);
