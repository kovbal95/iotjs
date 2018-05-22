//-not_implemented //good //finisd
/*
	obj = {
		foo: function (a, b) {
			…
		},
		bar: function (x, y) {
			…
		},
		//  quux: no equivalent in ES5
		…
	};
*/

if (N>2000000) break;

obj = {
  foo: function (a, b) {
    return a+b;
  }
}
assert.equal(obj.foo(1, 2) === 3, true);
