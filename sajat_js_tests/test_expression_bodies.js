//-not_implemented //good //finisd
/*
	odds  = evens.map(v => v + 1)
	pairs = evens.map(v => ({ even: v, odd: v + 1 }))
	nums  = evens.map((v, i) => v + i)
*/

if (N>100000) break;

evens = [1, 2, 3];
odds  = evens.map(v => v + 1);
assert.equal(odds.toString(), [2, 3, 4].toString());
/*
assert.equal(odds[0], 2);
assert.equal(odds[1], 3);
assert.equal(odds[2], 4);
*/
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
assert.equal(JSON.stringify(pairs), JSON.stringify( [ {even: 1, odd: 2}, {even: 2, odd: 3}, {even: 3, odd: 4} ] ));
/*
assert.equal(pairs[0].even, 1);
assert.equal(pairs[0].odd, 2);
assert.equal(pairs[1].even, 2);
assert.equal(pairs[1].odd, 3);
assert.equal(pairs[2].even, 3);
assert.equal(pairs[2].odd, 4);
*/
nums  = evens.map((v, i) => v + i);
assert.equal(JSON.stringify(nums), JSON.stringify([1, 3, 5]));
/*
assert.equal(nums[0], 1);
assert.equal(nums[1], 3);
assert.equal(nums[2], 5);
*/
