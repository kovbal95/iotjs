//not_implemented //-good //finisd
/* es6 //formed
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)  // true
"hello".includes("ell")  // true
"hello".includes("ell", 1)  // true
"hello".includes("ell", 2)  // false
*/

if (N>800000) break;

assert.equal("hello".startsWith("ello", 1), true) // true
assert.equal("hello".endsWith("hell", 4), true)  // true
assert.equal("hello".includes("ell"), true)  // true
assert.equal("hello".includes("ell", 1), true)  // true
assert.equal("hello".includes("ell", 2), false)  // false
