//-not_implemented //good //finisd
/*
	get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);
*/



function get(str, e, m) {
  return str[0]+e+str[1]+m+str[2];
}
var bar=1;
var baz=2;
var quux=4;
assert.equal(get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux) === "http://example.com/foo?bar=3&quux=4", true);
