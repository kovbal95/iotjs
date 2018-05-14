//not_implemented //-good //-finisd
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




var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 800000
for (var i=0;i<N;i++) {
	//not_implemented
	class Rectangle extends Shape {
		static defaultRectangle () {
			return new Rectangle("default", 0, 0, 100, 100)
		}
	}
	class Circle extends Shape {
		static defaultCircle () {
			return new Circle("default", 0, 0, 100)
		}
	}
}
console.log((Date.now()-start)/1000);
