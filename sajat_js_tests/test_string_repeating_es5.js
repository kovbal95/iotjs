//-not_implemented //good //finisd
/*
  Array((4 * depth) + 1).join(" ");
  Array(3 + 1).join("foo");
*/



assert.equal(Array(4 + 1).join(" "), "    ");
assert.equal(Array(3 + 1).join("foo"), "foofoofoo");
