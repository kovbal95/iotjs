//-not_implemented //good //finisd
/*
	nums.forEach(v => {
		if (v % 5 === 0)
			fives.push(v)
	})
*/

if (N>400000) break;

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fives = []
nums.forEach(v => {
	if (v % 5 === 0)
	fives.push(v)
})
assert.equal(fives.length, 2);
assert.equal(fives[0], 5);
assert.equal(fives[1], 10);
