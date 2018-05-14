//-not_implemented //good //finisd
/*
	function isSafeInteger (n) {
	    return (
		   typeof n === 'number'
				&& Math.round(n) === n
				&& -(Math.pow(2, 53) - 1) <= n
				&& n <= (Math.pow(2, 53) - 1)
	    );
	}
	isSafeInteger(42) === true;
	isSafeInteger(9007199254740992) === false;
*/

if (N>1000000) break;//needed

function isSafeInteger (n) {
    return (
     typeof n === 'number'
      && Math.round(n) === n
      && -(Math.pow(2, 53) - 1) <= n
      && n <= (Math.pow(2, 53) - 1)
    );
}
assert.equal(isSafeInteger(42), true);
assert.equal(isSafeInteger(9007199254740992), false);
