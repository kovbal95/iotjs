//not_implemented //-good //finisd
/* es6 //formed
	function quux (strings, ...values) {
		strings[0] === "foo\n"
		strings[1] === "bar"
		strings.raw[0] === "foo\\n"
		strings.raw[1] === "bar"
		values[0] === 42
	}
	quux `foo\n${ 42 }bar`
	String.raw `foo\n${ 42 }bar` === "foo\\n42bar"
*/



function quux (strings, ...values) {
	assert.equal(strings[0] === "foo\n", true);
	assert.equal(strings[1] === "bar", true);
	assert.equal(strings.raw[0] === "foo\\n", true);
	assert.equal(strings.raw[1] === "bar", true);
	assert.equal(values[0] === 42, true);
}
quux `foo\n${ 42 }bar`;
assert.equal(String.raw `foo\n${ 42 }bar` === "foo\\n42bar", true);
