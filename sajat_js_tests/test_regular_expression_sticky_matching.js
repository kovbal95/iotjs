//not_implemented //-good //-finisd
/*es6 //formed
	let parser = (input, match) => {
		for (let pos = 0, lastPos = input.length; pos < lastPos; ) {
			for (let i = 0; i < match.length; i++) {
				match[i].pattern.lastIndex = pos
				let found
				if ((found = match[i].pattern.exec(input)) !== null) {
					match[i].action(found)
					pos = match[i].pattern.lastIndex
					break
				}
			}
		}
	}
	let report = (match) => {
		console.log(JSON.stringify(match))
	}
	parser("Foo 1 Bar 7 Baz 42", [
		{ pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
		{ pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
		{ pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
		{ pattern: /\s* /y, action: (match) => {} }
	])
*/

/*
	var parser = function (input, match) {
	    for (var i, found, inputTmp = input; inputTmp !== ""; ) {
		for (i = 0; i < match.length; i++) {
		    if ((found = match[i].pattern.exec(inputTmp)) !== null) {
		        match[i].action(found);
		        inputTmp = inputTmp.substr(found[0].length);
		        break;
		    }
		}
	    }
	}

	var report = function (match) {
	    console.log(JSON.stringify(match));
	};
	parser("Foo 1 Bar 7 Baz 42", [
	    { pattern: /^Foo\s+(\d+)/, action: function (match) { report(match); } },
	    { pattern: /^Bar\s+(\d+)/, action: function (match) { report(match); } },
	    { pattern: /^Baz\s+(\d+)/, action: function (match) { report(match); } },
	    { pattern: /^\s* /,         action: function (match) {}                 }
	]);
*/


var assert = require('assert');
var console = require('console');
var start = Date.now();

var N = 800000
for (var i=0;i<N;i++) {
	//not_implemented
	var parser = (input, match) => {
		for (var pos = 0, lastPos = input.length; pos < lastPos; ) {
			for (var i = 0; i < match.length; i++) {
				match[i].pattern.lastIndex = pos
				var found
				if ((found = match[i].pattern.exec(input)) !== null) {
					match[i].action(found)
					pos = match[i].pattern.lastIndex
					break
				}
			}
		}
	}
	var report = (match) => {
		console.log(JSON.stringify(match))
	}
	parser("Foo 1 Bar 7 Baz 42", [
		{ pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
		{ pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
		{ pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
		{ pattern: /\s* /y, action: (match) => {} }
	])
}
console.log((Date.now()-start)/1000);
