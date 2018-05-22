//-not_implemented //good //finisd
/*
"hello".indexOf("ello") === 1;    // true
"hello".indexOf("hell") === (4 - "hell".length); // true
"hello".indexOf("ell") !== -1;    // true
"hello".indexOf("ell", 1) !== -1; // true
"hello".indexOf("ell", 2) !== -1; // false
*/

if (N>800000) break;

assert.equal("hello".indexOf("ello") === 1, true);    // true
assert.equal("hello".indexOf("hell") === (4 - "hell".length), true); // true
assert.equal("hello".indexOf("ell") !== -1, true);    // true
assert.equal("hello".indexOf("ell", 1) !== -1, true); // true
assert.equal("hello".indexOf("ell", 2) !== -1, false); // false
