//not_implemented //-good //-finisd
/*es6 //formed
	function msgAfterTimeout (msg, who, timeout) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
		})
	}
	msgAfterTimeout("", "Foo", 100).then((msg) =>
		msgAfterTimeout(msg, "Bar", 200)
	).then((msg) => {
		console.log(`done after 300ms:${msg}`)
	})
*/

/*
	function msgAfterTimeout (msg, who, timeout, onDone) {
	    setTimeout(function () {
		onDone(msg + " Hello " + who + "!");
	    }, timeout);
	}
	msgAfterTimeout("", "Foo", 100, function (msg) {
	    msgAfterTimeout(msg, "Bar", 200, function (msg) {
		console.log("done after 300ms:" + msg);
	    });
	});
*/

var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 1
for (var i=0;i<N;i++) {
	//not_implemented
	function msgAfterTimeout (msg, who, timeout) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
		})
	}
	msgAfterTimeout("", "Foo", 100).then((msg) =>
		msgAfterTimeout(msg, "Bar", 200)
	).then((msg) => {
		console.log(`done after 300ms:${msg}`)
	})
}
console.log((Date.now()-start)/1000);
