//not_implemented //-good //finisd
/*es6 //formed
	let fibonacci = {
		[Symbol.iterator]() {
			let pre = 0, cur = 1
			return {
				next () {
					[ pre, cur ] = [ cur, pre + cur ]
					return { done: false, value: cur }
				}
			}
		}
	}
	for (let n of fibonacci) {
		if (n > 1000)
			break
		console.log(n)
	}
*/





if (N>80000) break;//needed

var fibonacci = {
	[Symbol.iterator]() {
		var pre = 0, cur = 1
		return {
			next () {
				[ pre, cur ] = [ cur, pre + cur ]
				return { done: false, value: pre }
			}
		}
	}
}

var t = [];
for (let n of fibonacci) {
	if (n > 1000)
		break;
	t.push(n);
}
assert.equal(JSON.stringify(t) === JSON.stringify([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), true);
