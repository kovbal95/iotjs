//not_implemented //-good //finisd
/*es6 //formed
	let target = {
		foo: "Welcome, foo"
	}
	let proxy = new Proxy(target, {
		get (receiver, name) {
			return name in receiver ? receiver[name] : `Hello, ${name}`
		}
	})
	proxy.foo === "Welcome, foo"
	proxy.world === "Hello, world"
*/

if (N>1) break;//needed

var target = {
	foo: "Welcome, foo"
}
var proxy = new Proxy(target, {
	get (receiver, name) {
		return name in receiver ? receiver[name] : `Hello, ${name}`
	}
})
assert.equal(proxy.foo === "Welcome, foo", true);
assert.equal(proxy.world === "Hello, world", true);
