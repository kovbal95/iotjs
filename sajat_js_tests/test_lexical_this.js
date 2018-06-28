//-not_implemented //good //finisd
/*
	this.nums.forEach((v) => {
		if (v % 5 === 0)
			this.fives.push(v)
	})
*/



var test = {
	nums: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
	fives: [],
	func: function() {
		this.nums.forEach((v) => {
			if (v % 5 === 0)
				this.fives.push(v)
		})
	},
};
test.func();
assert.equal(test.fives.length, 2);
assert.equal(test.fives[0], 5);
assert.equal(test.fives[1], 10);
