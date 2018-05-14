//-not_implemented //good //finisd
/*es6 //formed
	function msgAfterTimeout (msg, who, timeout) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
		})
	}
	msgAfterTimeout("", "Foo", 100).then((msg) =>
		msgAfterTimeout(msg, "Bar", 200)
	).then((msg) => {
		console.log(`done after 300ms:${msg}`)
	})
*/

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
if (console === undefined) var console = require('console');
var MAX=200;
var forN=100000
var j=0;
var start = Date.now();
for (var i=0;i<MAX;i++) {
	new Promise((resolve, reject) => {resolve("Message");}).then((msg) => {
		for (var i=0;i<forN;i++) {
			j++;
		}
	});
}
new Promise((resolve, reject) => {
	resolve("Message");
}).then((msg) => {
	assert.equal(j === forN*MAX, true);
	console.log((Date.now()-start)/1000);
}, function (err) {
		console.log("error: " + err);
});
