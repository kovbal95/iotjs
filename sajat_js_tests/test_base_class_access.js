//not_implemented //-good //finisd
/*es6 //formed
	class Shape {
		…
		toString () {
			return `Shape(${this.id})`
		}
	}
	class Rectangle extends Shape {
		constructor (id, x, y, width, height) {
			super(id, x, y)
			…
		}
		toString () {
			return "Rectangle > " + super.toString()
		}
	}
	class Circle extends Shape {
		constructor (id, x, y, radius) {
			super(id, x, y)
			…
		}
		toString () {
			return "Circle > " + super.toString()
		}
	}
*/



class Shape {
	constructor (id, x, y) {
		this.id=id
		this.x=x
		this.y=y
	}

	toString () {
		return `Shape(${this.id})`
	}
}
class Rectangle extends Shape {
	constructor (id, x, y, width, height) {
		super(id, x, y)
		this.width=width
		this.height=height
	}
	toString () {
		return "Rectangle > " + super.toString()
	}
}
class Circle extends Shape {
	constructor (id, x, y, radius) {
		super(id, x, y)
		this.radius=radius
	}
	toString () {
		return "Circle > " + super.toString()
	}
}
var s = new Shape(12, 0, 0);
assert.equal(s.toString(), "Shape(12)");
var r = new Rectangle(13, 0, 0, 1, 1);
assert.equal(r.toString(), "Rectangle > Shape(13)");
var c = new Circle(14, 0, 0, 2);
assert.equal(c.toString(), "Circle > Shape(14)");
