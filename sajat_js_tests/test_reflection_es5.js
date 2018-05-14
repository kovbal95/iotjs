//-not_implemented //good //finisd
/*
	var obj = { a: 1 };
	Object.defineProperty(obj, "b", { value: 2 });
	Object.getOwnPropertyNames(obj); // [ "a", "b" ]
*/

if (N>400000) break;//needed

var obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2 });
assert.equal(Object.getOwnPropertyNames(obj).length, 2);
assert.equal(Object.getOwnPropertyNames(obj)[0], "a");
assert.equal(Object.getOwnPropertyNames(obj)[1], "b");
