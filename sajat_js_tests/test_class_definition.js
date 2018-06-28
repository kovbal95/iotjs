//not_implemented //-good //finisd
/* es6 //formed
	class Shape {
		constructor (id, x, y) {
			this.id = id
			this.move(x, y)
		}
		move (x, y) {
			this.x = x
			this.y = y
		}
	}
*/



class Shape {
	constructor (id, x, y) {
		this.id = id
		this.move(x, y)
	}
	move (x, y) {
		this.x = x
		this.y = y
	}
}
var s = new Shape(12, 0, 0);
assert.equal(s.id, 12);
assert.equal(s.x, 0);
assert.equal(s.y, 0);
s.move(1, 1);
assert.equal(s.x, 1);
assert.equal(s.y, 1);
