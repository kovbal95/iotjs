//-not_implemented //good //finisd
/*
	var fibonacci = {
	    next: (function () {
		var pre = 0, cur = 1;
		return function () {
		    tmp = pre;
		    pre = cur;
		    cur += tmp;
		    return cur;
		};
	    })()
	};

	var n;
	for (;;) {
	    n = fibonacci.next();
	    if (n > 1000)
		break;
	    console.log(n);
*/

if (N>80000) break;//needed

var fibonacci = {
    next: (function () {
      var pre = 0, cur = 1;
      return function () {
          tmp = pre;
          pre = cur;
          cur += tmp;
          return pre;
      };
    })()
};

var n=[];
var i=0;
for (;;) {
    var a=fibonacci.next();
    if (a > 1000) break;
    n[i++] = a;
}
assert.equal(JSON.stringify(n) === JSON.stringify([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), true);
