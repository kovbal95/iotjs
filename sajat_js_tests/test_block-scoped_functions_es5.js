//-not_implemented //good //finisd
/*
	//  only in ES5 with the help of block-scope emulating
	//  function scopes and function expressions
	(function () {
		var foo = function () { return 1; }
		foo() === 1;
		(function () {
				var foo = function () { return 2; }
				foo() === 2;
		})();
		foo() === 1;
	})();
*/

if (N>1000000) break;//needed

(function () {
  var foo = function () { return 1; }
  assert.equal(foo(), 1);
  (function () {
      var foo = function () { return 2; }
      assert.equal(foo(), 2);
  })();
  assert.equal(foo(), 1);
})();
