//not_implemented //-good //-finisd
/*es6 //formed
	//  generic asynchronous control-flow driver
	function async (proc, ...params) {
		let iterator = proc(...params)
		return new Promise((resolve, reject) => {
			let loop = (value) => {
				let result try {
					result = iterator.next(value)
				}
				catch (err) {
					reject(err)
				}
				if (result.done)
					resolve(result.value)
				else if (  typeof result.value === "object"
					&& typeof result.value.then === "function")
					result.value.then((value) => {
						loop(value)
					}, (err) => {
						reject(err)
					})
				else
					loop(result.value)
			}
			loop()
		})
	}
	//  application-specific asynchronous builder
	function makeAsync (text, after) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(text), after)
		})
	}
	//  application-specific asynchronous procedure
	async(function* (greeting) {
		let foo = yield makeAsync("foo", 300)
		let bar = yield makeAsync("bar", 200)
		let baz = yield makeAsync("baz", 100)
		return `${greeting} ${foo} ${bar} ${baz}`
	}, "Hello").then((msg) => {
		console.log("RESULT:", msg) // "Hello foo bar baz"
	})
*/

/*
	//  no equivalent in ES5
*/




var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 1
for (var i=0;i<N;i++) {
	//not_implemented
	//  generic asynchronous control-flow driver
	/*
	function async (proc, ...params) {
		let iterator = proc(...params)
		return new Promise((resolve, reject) => {
			let loop = (value) => {
				let result try {
					result = iterator.next(value)
				}
				catch (err) {
					reject(err)
				}
				if (result.done)
					resolve(result.value)
				else if (  typeof result.value === "object"
					&& typeof result.value.then === "function")
					result.value.then((value) => {
						loop(value)
					}, (err) => {
						reject(err)
					})
				else
					loop(result.value)
			}
			loop()
		})
	}
	//  application-specific asynchronous builder
	function makeAsync (text, after) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(text), after)
		})
	}
	//  application-specific asynchronous procedure
	async(function* (greeting) {
		let foo = yield makeAsync("foo", 300)
		let bar = yield makeAsync("bar", 200)
		let baz = yield makeAsync("baz", 100)
		return `${greeting} ${foo} ${bar} ${baz}`
	}, "Hello").then((msg) => {
		console.log("RESULT:", msg) // "Hello foo bar baz"
	})
	*/
	// an immediately resolved promise

	var p = new Promise(function(resolve, reject) {
	   setTimeout(() => resolve(50), 2000);
	});

	// handler can't change promise, just value
	p.then((res) => {
			console.log(res);
			if (res<50) {
				console.log("ok");
				resolve(res+2);
			}
		});



}
console.log((Date.now()-start)/1000);
