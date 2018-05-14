//not_implemented //good //finisd
/*
	var Shape = function (id, x, y) {
	    …
	};
	Shape.prototype.toString = function (x, y) {
	    return "Shape(" + this.id + ")"
	};
	var Rectangle = function (id, x, y, width, height) {
	    Shape.call(this, id, x, y);
	    …
	};
	Rectangle.prototype.toString = function () {
	    return "Rectangle > " + Shape.prototype.toString.call(this);
	};
	var Circle = function (id, x, y, radius) {
	    Shape.call(this, id, x, y);
	    …
	};
	Circle.prototype.toString = function () {
	    return "Circle > " + Shape.prototype.toString.call(this);
	};
*/
if (N>200000) break;

var Shape = function (id, x, y) {
  this.id=id;
  this.x=x;
  this.y=y;
};
Shape.prototype.toString = function () {
    return "Shape(" + this.id + ")";
};
var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width=width;
    this.height=height;
};
Rectangle.prototype.toString = function () {
    return "Rectangle > " + Shape.prototype.toString.call(this);
};
var Circle = function (id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius=radius;
};
Circle.prototype.toString = function () {
    return "Circle > " + Shape.prototype.toString.call(this);
};
var s = new Shape(12, 0, 0);
assert.equal(s.toString(), "Shape(12)");
var r = new Rectangle(13, 0, 0, 1, 1);
assert.equal(r.toString(), "Rectangle > Shape(13)");
var c = new Circle(14, 0, 0, 2);
assert.equal(c.toString(), "Circle > Shape(14)");
