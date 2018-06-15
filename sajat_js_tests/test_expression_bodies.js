//-not_implemented //good //finisd
/*
	odds  = evens.map(v => v + 1)
	pairs = evens.map(v => ({ even: v, odd: v + 1 }))
	nums  = evens.map((v, i) => v + i)
*/



evens = [1, 2, 3];
odds  = evens.map(v => v + 1);
assert.equal(odds.toString(), [2, 3, 4].toString());
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
assert.equal(JSON.stringify(pairs), JSON.stringify( [ {even: 1, odd: 2}, {even: 2, odd: 3}, {even: 3, odd: 4} ] ));
nums  = evens.map((v, i) => v + i);
assert.equal(JSON.stringify(nums), JSON.stringify([1, 3, 5]));
