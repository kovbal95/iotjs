//not_implemented //-good //finisd
/*
	"𠮷".length === 2
	"𠮷".match(/./u)[0].length === 2
	"𠮷" === "\uD842\uDFB7"
	"𠮷" === "\u{20BB7}"
	"𠮷".codePointAt(0) == 0x20BB7
	for (let codepoint of "𠮷") console.log(codepoint)
*/

/*
	"𠮷".length === 2;
	"𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF][\uD800-\uDBFF][\uDC00-\uDFFF][\uD800-\uDBFF](?![\uDC00-\uDFFF])(?:[^\uD800-\uDBFF]^)[\uDC00-\uDFFF])/)[0].length === 2;
	"𠮷" === "\uD842\uDFB7";
	//  no equivalent in ES5
	//  no equivalent in ES5
	//  no equivalent in ES5
*/

if (N>800000) break;//needed
assert.equal("𠮷".length, 2)
assert.equal("𠮷".match(/./u)[0].length, 2)
assert.equal("𠮷", "\uD842\uDFB7")
assert.equal("𠮷", "\u{20BB7}")
assert.equal("𠮷".codePointAt(0), 0x20BB7)
