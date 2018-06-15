//not_implemented //-good //finisd
/*es6 //formed
	Symbol.for("app.foo") === Symbol.for("app.foo")
	const foo = Symbol.for("app.foo")
	const bar = Symbol.for("app.bar")
	Symbol.keyFor(foo) === "app.foo"
	Symbol.keyFor(bar) === "app.bar"
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



assert.equal(Symbol.for("app.foo") === Symbol.for("app.foo"), true);
const foo = Symbol.for("app.foo")
const bar = Symbol.for("app.bar")
assert.equal(Symbol.keyFor(foo) === "app.foo", true);
assert.equal(Symbol.keyFor(bar) === "app.bar", true);
assert.equal(typeof foo === "symbol", true);
assert.equal(typeof bar === "symbol", true);
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
assert.equal(JSON.stringify(obj) === "{}", true); // {}
assert.equal(JSON.stringify(Object.keys(obj)) === "[]", true); // []
assert.equal(JSON.stringify(Object.getOwnPropertyNames(obj)) === "[]", true); // []
assert.equal(Object.getOwnPropertySymbols(obj).length === 2, true);
assert.equal(Object.getOwnPropertySymbols(obj)[0] === foo, true); // [ foo, bar ]
assert.equal(Object.getOwnPropertySymbols(obj)[1] === bar, true);
