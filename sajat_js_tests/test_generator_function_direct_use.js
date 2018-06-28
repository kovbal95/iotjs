//not_implemented //-good //finisd
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





function* range (start, end, step) {
	while (start < end) {
		yield start
		start += step
	}
}
var j=0
for (var i of range(0, 10, 2)) {
	assert.equal(i === 2*j++, true) // 0, 2, 4, 6, 8
}
