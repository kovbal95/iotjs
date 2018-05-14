//not_implemented //-good //finisd
/*es6 //formed
	get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
*/

if (N>1000000) break;

function get(str, e, m) {
  return str[0]+e+str[1]+m+str[2];
}

var bar=1;
var baz=2;
var quux=4;
assert.equal(get`http://example.com/foo?bar=${bar + baz}&quux=${quux}` === "http://example.com/foo?bar=3&quux=4", true);
