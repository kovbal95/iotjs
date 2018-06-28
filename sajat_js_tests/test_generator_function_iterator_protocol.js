//not_implemented //-good //finisd
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



var fibonacci = {
		*[Symbol.iterator]() {
			var pre = 0, cur = 1
			for (;;) {
					[ pre, cur ] = [ cur, pre + cur ]
					yield pre
			}
		}
}

var t = []
var i=0;
for (var n of fibonacci) {
		if (n > 1000) break;
		t[i++]=n;
}
assert.equal(JSON.stringify(t) === JSON.stringify([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), true);
