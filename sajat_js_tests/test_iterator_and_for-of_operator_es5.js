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
	}
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

var t=[];
var n;
for (;;) {
    n = fibonacci.next();
    if (n > 1000)
      break;
    t.push(n);
}
assert.equal(JSON.stringify(t) === JSON.stringify([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), true);
