//not_implemented //-good //finisd
/* es6 //formed
	Symbol("foo") !== Symbol("foo")
	const foo = Symbol()
	const bar = Symbol()
	typeof foo === "symbol"
	typeof bar === "symbol"
	let obj = {}
	obj[foo] = "foo"
	obj[bar] = "bar"
	JSON.stringify(obj) // {}
	Object.keys(obj) // []
	Object.getOwnPropertyNames(obj) // []
	Object.getOwnPropertySymbols(obj) // [ foo, bar ]
*/

if (N>1) break;//needed

assert.equal(Symbol("foo") !== Symbol("foo"));
var foo = Symbol("foo");
var bar = Symbol('bar');
assert.equal(typeof foo, "symbol");
var obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
assert.equal(JSON.stringify(obj), "{}");
assert.equal(JSON.stringify(Object.keys(obj)), "[]");
assert.equal(JSON.stringify(Object.getOwnPropertyNames(obj)), "[]");
var propertys = Object.getOwnPropertySymbols(obj);
assert.equal(propertys[0].toString(), "Symbol(foo)");
assert.equal(propertys[1].toString(), "Symbol(bar)");
