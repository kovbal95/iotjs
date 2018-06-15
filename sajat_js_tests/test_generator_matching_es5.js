//-not_implemented //good //finisd



var fibonacci = function (max) {
	var pre = 0, cur = 1, i=0;
  var ret=[];
	while (max > cur) {
    ret[i++]=cur;
    var temp=cur;
    cur=pre+cur;
    pre=temp;
  }
	return ret;
}

var n=fibonacci(1000);
assert.equal(JSON.stringify(n) === JSON.stringify([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]), true)
