//not_implemented //-good //finisd
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

parser("Foo 1 Bar 7 Baz 42", [
	{ pattern: /Foo\s+\d+/y, action: (match) => {assert.equal(JSON.stringify(match) === JSON.stringify(["Foo 1"]), true)} },
	{ pattern: /Bar\s+\d+/y, action: (match) => {assert.equal(JSON.stringify(match) === JSON.stringify(["Bar 7"]), true)} },
	{ pattern: /Baz\s+\d+/y, action: (match) => {assert.equal(JSON.stringify(match) === JSON.stringify(["Baz 42"]), true)} },
	{ pattern: /\s* /y, action: (match) => {assert.equal(JSON.stringify(match) === JSON.stringify([" "]), true)} }
])
