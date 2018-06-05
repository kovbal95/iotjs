//-not_implemented //good //finisd
/*
	function msgAfterTimeout (msg, who, timeout, onDone) {
	    setTimeout(function () {
				onDone(msg + " Hello " + who + "!");
	    }, timeout);
	}
	msgAfterTimeout("", "Foo", 100, function (msg) {
	    msgAfterTimeout(msg, "Bar", 200, function (msg) {
				console.log("done after 300ms:" + msg);
	    });
	});
*/
if (console === undefined) var console = require('console');
var Assert = function() {}
Assert.prototype.equal = function(a, b) {
  if (a != b) {
    throw "n/a";
  }
}
Assert.prototype.throws = function(a){
  var b=true;
  try {
    a();
  }
  catch(err){
    b=false;
  }
  if (b) {
    throw "n/a";
  }
}
var assert = new Assert();

var MAX=200;
var forN=100000
var j=0;
var start = Date.now();
for (var i=0;i<MAX;i++) {
	setTimeout(function(){
		for (var i=0;i<forN;i++) {
			//console.log("j: "+j);
			j++;
		}
  }, 0);
}
setTimeout(function(){
	assert.equal(j === forN*MAX, true);
	console.log((Date.now()-start)/1000);
}, 0);
