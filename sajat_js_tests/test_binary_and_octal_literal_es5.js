//-not_implemented //good //finisd
/*
	parseInt("111110111", 2) === 503;
	parseInt("767", 8) === 503;
	0767 === 503; // only in non-strict, backward compatibility mode
*/

if(N>4000000) break;//needed

assert.equal(parseInt("111110111", 2), 503);
assert.equal(parseInt("767", 8), 503);
