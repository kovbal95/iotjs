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

var fut=true;
var i=0, j=0;
new Promise((resolve, reject) => {
	while (i<10) {
		i++;
	}
	resolve("Vegigment!");
}).then((msg) => {
	console.log(msg+i+" "+j);
	fut=false;
});
while (fut) {
	j++;
}
