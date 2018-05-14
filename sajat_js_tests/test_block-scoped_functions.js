//not_implemented //-good //finisd
/*
	{
		function foo () { return 1 }
		foo() === 1
		{
			function foo () { return 2 }
			foo() === 2
		}
		foo() === 1
	}
*/

if (N>1000000) break;
{
	function foo () { return 1 }
	assert.equal(foo(), 1)
	{
		function foo () { return 2 }
		assert.equal(foo(), 2)
	}
	assert.equal(foo(), 1);
}
