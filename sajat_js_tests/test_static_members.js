//not_implemented //-good //finisd
/* es6 //formed
	class Rectangle extends Shape {
		…
		static defaultRectangle () {
			return new Rectangle("default", 0, 0, 100, 100)
		}
	}
	class Circle extends Shape {
		…
		static defaultCircle () {
			return new Circle("default", 0, 0, 100)
		}
	}
	var defRectangle = Rectangle.defaultRectangle()
	var defCircle  = Circle.defaultCircle()
*/

if (N>500000) break;//needed

class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

assert.equal(BiggerTriple.triple() === 9, true);

var tp = new Triple();
assert.throws(
	function () {
		tp.triple();
	}
);
