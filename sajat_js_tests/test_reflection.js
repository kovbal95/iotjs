//not_implemented //-good //finisd
/* es6 //formed
	let obj = { a: 1 }
	Object.defineProperty(obj, "b", { value: 2 })
	Reflect.ownKeys(obj) // [ "a", "b" ]
*/

if (N>400000) break;//needed

var obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2 });
assert.equal(Reflect.ownKeys(obj).length, 2);
assert.equal(Reflect.ownKeys(obj)[0], "a");
assert.equal(Reflect.ownKeys(obj)[1], "b");
