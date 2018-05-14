//-not_implemented //good //finisd
/* es5
	var aggregation = function (baseClass, mixins) {
	    var base = function () {
		baseClass.apply(this, arguments);
		mixins.forEach(function (mixin) {
		    mixin.prototype.initializer.call(this);
		}.bind(this));
	    };
	    base.prototype = Object.create(baseClass.prototype);
	    base.prototype.constructor = base;
	    var copyProps = function (target, source) {
		Object.getOwnPropertyNames(source).forEach(function (prop) {
		    if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
		        return
		    Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
		})
	    }
	    mixins.forEach(function (mixin) {
		copyProps(base.prototype, mixin.prototype);
		copyProps(base, mixin);
	    });
	    return base;
	};

	var Colored = function () {};
	Colored.prototype = {
	    initializer: function ()  { this._color = "white"; },
	    getColor:    function ()  { return this._color; },
	    setColor:    function (v) { this._color = v; }
	};

	var ZCoord = function () {};
	ZCoord.prototype = {
	    initializer: function ()  { this._z = 0; },
	    getZ:        function ()  { return this._z; },
	    setZ:        function (v) { this._z = v; }
	};

	var Shape = function (x, y) {
	    this._x = x; this._y = y;
	};
	Shape.prototype = {
	    getX: function ()  { return this._x; },
	    setX: function (v) { this._x = v; },
	    getY: function ()  { return this._y; },
	    setY: function (v) { this._y = v; }
	}

	var _Combined = aggregation(Shape, [ Colored, ZCoord ]);
	var Rectangle = function (x, y) {
	    _Combined.call(this, x, y);
	};
	Rectangle.prototype = Object.create(_Combined.prototype);
	Rectangle.prototype.constructor = Rectangle;

	var rect = new Rectangle(7, 42);
	rect.setZ(1000);
	rect.setColor("red");
	console.log(rect.getX(), rect.getY(), rect.getZ(), rect.getColor());
*/

if (N>50000) break;//needed

var Shape = function (x, y) {
    this._x = x;
    this._y = y;
};
Shape.prototype = {
    get x ()  { return this._x; },
    set x (v) { this._x = v; },
    get y ()  { return this._y; },
    set y (v) { this._y = v; }
};
var Rectangle = function (x, y, width, height) {
  Shape.call(this, x, y);
  this._width=width;
  this._height=height;
}
Rectangle.prototype = {
  get width () { return this._width },
  set width (v) { this._width = v; },
  get height ()  { return this._height; },
  set height (v) { this._height = v; }
};
Object.getOwnPropertyNames(Shape.prototype).forEach(function (prop) {
  Object.defineProperty(Rectangle.prototype, prop, Object.getOwnPropertyDescriptor(Shape.prototype, prop));
});
var r = new Rectangle(0, 1, 2, 3);
assert.equal(JSON.stringify(r), JSON.stringify({_x: 0, _y: 1, _width: 2, _height: 3}));
r.x=4;
r.width=5;
assert.equal(JSON.stringify(r), JSON.stringify({_x: 4, _y: 1, _width: 5, _height: 3}));
