//-not_implemented //good //finisd
/*
	var Shape = function (id, x, y) {
	    this.id = id;
	    this.move(x, y);
	};
	Shape.prototype.move = function (x, y) {
	    this.x = x;
	    this.y = y;
	};
*/

if (N>800000) break;//needed

var Shape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x
    this.y = y
};
var s = new Shape(12, 0, 0);
assert.equal(s.id, 12);
assert.equal(s.x, 0);
assert.equal(s.y, 0);
s.move(1, 1);
assert.equal(s.x, 1);
assert.equal(s.y, 1);
