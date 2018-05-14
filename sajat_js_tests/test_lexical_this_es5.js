//-not_implemented //good //finisd
/*
	//  variant 1
	var self = this;
	this.nums.forEach(function (v) {
	    if (v % 5 === 0)
	        self.fives.push(v);
	});

	//  variant 2
	this.nums.forEach(function (v) {
	    if (v % 5 === 0)
	        this.fives.push(v);
	}, this);

	//  variant 3 (since ECMAScript 5.1 only)
	this.nums.forEach(function (v) {
	    if (v % 5 === 0)
	        this.fives.push(v);
	}.bind(this));
*/

if (N>400000) break;

this.nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
this.fives = [];
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}, this);
assert.equal(this.fives.length, 2);
assert.equal(this.fives[0], 5);
assert.equal(this.fives[1], 10);
