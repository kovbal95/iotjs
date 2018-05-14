//not_implemented //-good //-finisd
/* es6 //formed
//  ES6 class equivalent to the following C structure:
//  struct Example { unsigned long id; char username[16]; float amountDue }
class Example {
	constructor (buffer = new ArrayBuffer(24)) {
		this.buffer = buffer
	}
	set buffer (buffer) {
		this._buffer  = buffer
		this._id  = new Uint32Array (this._buffer,  0,  1)
		this._username  = new Uint8Array  (this._buffer,  4, 16)
		this._amountDue = new Float32Array(this._buffer, 20,  1)
	}
	get buffer () { return this._buffer }
	set id (v) { this._id[0] = v }
	get id () { return this._id[0] }
	set username (v) { this._username[0] = v }
	get username () { return this._username[0] }
	set amountDue (v) { this._amountDue[0] = v }
	get amountDue () { return this._amountDue[0] }
}
let example = new Example()
example.id = 7
example.username = "John Doe"
example.amountDue = 42.0
*/

var buffer = new ArrayBuffer(16);

var int32View = new Int32Array(buffer);

for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log('Entry ' + i + ': ' + int16View[i]);
}
