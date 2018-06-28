//not_implemented //-good //finisd
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



var fibonacci = function* (max) {
	var pre = 0, cur = 1
	while (max > cur) {
		[ pre, cur ] = [ cur, pre + cur ]
		yield pre
	}
}

var n=[...fibonacci(1000)]
assert.equal(JSON.stringify(n) === JSON.stringify([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), true)
