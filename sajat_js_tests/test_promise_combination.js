//not_implemented //-good //-finisd
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

/*
	function fetchAsync (url, timeout, onData, onError) {
	    …
	}
	function fetchAll (request, onData, onError) {
	    var result = [], results = 0;
	    for (var i = 0; i < request.length; i++) {
				result[i] = null;
				(function (i) {
				    fetchAsync(request[i].url, request[i].timeout, function (data) {
				        result[i] = data;
				        if (++results === request.length)
				            onData(result);
				    }, onError);
				})(i);
	    }
	}
	fetchAll([
	    { url: "http://backend/foo.txt", timeout: 500 },
	    { url: "http://backend/bar.txt", timeout: 500 },
	    { url: "http://backend/baz.txt", timeout: 500 }
	], function (data) {
	    var foo = data[0], bar = data[1], baz = data[2];
	    console.log("success: foo=" + foo + " bar=" + bar + " baz=" + baz);
	}, function (err) {
	    console.log("error: " + err);
	});
*/





function fetchAsync (url, timeout, onData, onError) {

}
var fetchPromised = (url, timeout) => {
	return new Promise((resolve, reject) => {
		fetchAsync(url, timeout, resolve, reject)
	})
}
Promise.all([
	fetchPromised("http://backend/foo.txt", 500),
	fetchPromised("http://backend/bar.txt", 500),
	fetchPromised("http://backend/baz.txt", 500)
]).then((data) => {
	var [ foo, bar, baz ] = data
	console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
}, (err) => {
	console.log(`error: ${err}`)
})
