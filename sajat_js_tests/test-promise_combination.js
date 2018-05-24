//-not_implemented //good //finisd
/*es6 //formed
	function fetchAsync (url, timeout, onData, onError) {
		…
	}
	let fetchPromised = (url, timeout) => {
		return new Promise((resolve, reject) => {
			fetchAsync(url, timeout, resolve, reject)
		})
	}
	Promise.all([
		fetchPromised("http://backend/foo.txt", 500),
		fetchPromised("http://backend/bar.txt", 500),
		fetchPromised("http://backend/baz.txt", 500)
	]).then((data) => {
		let [ foo, bar, baz ] = data
		console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
	}, (err) => {
		console.log(`error: ${err}`)
	})
*/

var i=0;
var start = Date.now();
while (i<100) {
	i++;
	function fetchAsync (url, timeout, onData, onError) {
		var j=0;
		while (j<1000000) {j++;}
		return url;
	}
	var fetchPromised = (url, timeout) => {
		return new Promise((resolve, reject) => {
			resolve(fetchAsync(url, timeout, resolve, reject))
		})
	}
	Promise.all([
		fetchPromised("http://backend/foo.txt", 500),
		fetchPromised("http://backend/bar.txt", 500),
		fetchPromised("http://backend/baz.txt", 500)
	]).then((data) => {
		var foo=data[0], bar=data[1], baz=data[2];
		assert.equal(`foo=${foo} bar=${bar} baz=${baz}` === "foo=http://backend/foo.txt bar=http://backend/bar.txt baz=http://backend/baz.txt", true)
	}, (err) => {
		console.log(`error: ${err}`)
	})
}
setTimeout(function() {setTimeout(function() {console.log((Date.now()-start)/1000);}, 0)}, 0);
