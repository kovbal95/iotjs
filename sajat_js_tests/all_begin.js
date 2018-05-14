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
var N=1;
var start = Date.now();
while (true) {
