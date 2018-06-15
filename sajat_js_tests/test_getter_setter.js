//not_implemented //-good //finisd
/*es6 //formed
	class Rectangle {
		constructor (width, height) {
			this._width  = width
			this._height = height
		}
		set width (width) { this._width = width }
		get width () { return this._width }
		set height (height) { this._height = height }
		get height () { return this._height }
		get area () { return this._width * this._height }
	}
	var r = new Rectangle(50, 20)
	r.area === 1000
*/



class Rectangle {
	constructor (width, height) {
		this._width  = width
		this._height = height
	}
	set width (width) { this._width = width }
	get width () { return this._width }
	set height (height) { this._height = height }
	get height () { return this._height }
	get area () { return this._width * this._height }
}
var r = new Rectangle(0, 0);
r.width=50;
r.height=20;
assert.equal(r.area === 1000, true);
