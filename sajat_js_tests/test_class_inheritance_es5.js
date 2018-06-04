//-not_implemented //good //finisd
/*
	var Rectangle = function (id, x, y, width, height) {
	    Shape.call(this, id, x, y);
	    this.width  = width;
	    this.height = height;
	};
	Rectangle.prototype = Object.create(Shape.prototype);
	Rectangle.prototype.constructor = Rectangle;
	var Circle = function (id, x, y, radius) {
	    Shape.call(this, id, x, y);
	    this.radius = radius;
	};
	Circle.prototype = Object.create(Shape.prototype);
	Circle.prototype.constructor = Circle;
*/

if (N>100000) break;//needed

var Shape = function (id, x, y) {
  this.id=id;
  this.x=x;
  this.y=y;
};
var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width  = width;
    this.height = height;
};
var r = new Rectangle(0, 1, 2, 3, 4);
assert.equal(JSON.stringify(r), JSON.stringify({id: 0, x: 1, y: 2, width: 3, height: 4}));
