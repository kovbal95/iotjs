//-not_implemented //good //finisd
/* es5
	var Rectangle = function (id, x, y, width, height) {
	    …
	};
	Rectangle.defaultRectangle = function () {
	    return new Rectangle("default", 0, 0, 100, 100);
	};
	var Circle = function (id, x, y, width, height) {
	    …
	};
	Circle.defaultCircle = function () {
	    return new Circle("default", 0, 0, 100);
	};
	var defRectangle = Rectangle.defaultRectangle();
	var defCircle    = Circle.defaultCircle();
*/

if (N>500000) break;//needed

var Triple = function () {}
Triple.triple = function(n) {
  if (n === undefined) {
    n = 1;
  }
  return n * 3;
}

var BiggerTriple = function() {}
BiggerTriple.triple = function(n) {
  return Triple.triple(n)*Triple.triple(n);
}

assert.equal(BiggerTriple.triple() === 9, true);

var tp = new Triple();
assert.throws(
	function () {
		tp.triple();
	}
);
