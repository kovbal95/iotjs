//not_implemented //-good //finisd
/*es6 //formed
	class Clz {
		* bar () {
			…
		}
	}
	let Obj = {
		* foo () {
			…
		}
	}
*/



function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

assert.equal(gen.next().value === 10, true);

assert.equal(gen.next().value === 20, true);
