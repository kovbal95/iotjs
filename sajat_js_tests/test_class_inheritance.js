//not_implemented //-good //finisd
/*es6 //formed
	class Rectangle extends Shape {
		constructor (id, x, y, width, height) {
			super(id, x, y)
			this.width  = width
			this.height = height
		}
	}
	class Circle extends Shape {
		constructor (id, x, y, radius) {
			super(id, x, y)
			this.radius = radius
		}
	}
*/

if (N>100000) break;//needed

class Shape {
	constructor (id, x, y) {
		this.id=id;
		this.x=x;
		this.y=y;
	}
}
class Rectangle extends Shape {
	constructor (id, x, y, width, height) {
		super(id, x, y);
		this.width  = width;
		this.height = height;
	}
}
var r = new Rectangle(0, 1, 2, 3, 4);
assert.equal(JSON.stringify(r), JSON.stringify({id: 0, x: 1, y: 2, width: 3, height: 4}));
