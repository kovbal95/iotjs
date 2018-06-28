//not_implemented //-good //finisd
/*
	var params = [ "hello", true, 7 ]
	var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
	function f (x, y, ...a) {
		return (x + y) * a.length
	}
	f(1, 2, ...params), 9
	var str = "foo"
	var chars = [ ...str ] // [ "f", "o", "o" ]
*/



var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
assert.equal(other.length, 5);
assert.equal(other[0], 1);
assert.equal(other[1], 2);
assert.equal(other[2], "hello");
assert.equal(other[3], true);
assert.equal(other[4], 7);
function f (x, y, ...a) {
	return (x + y) * a.length
}
assert.equal(f(1, 2, ...params), 9);
var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
assert.equal(chars.length, 3);
assert.equal(chars[0], "f");
assert.equal(chars[1], "o");
assert.equal(chars[2], "o");
