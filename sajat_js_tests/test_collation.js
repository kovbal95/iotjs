//not_implemented //-good //finisd
/*es6 //formed
	// in German,  "ä" sorts with "a"
	// in Swedish, "ä" sorts after "z"
	var list = [ "ä", "a", "z" ]
	var l10nDE = new Intl.Collator("de")
	var l10nSV = new Intl.Collator("sv")
	l10nDE.compare("ä", "z") === -1
	l10nSV.compare("ä", "z") === +1
	console.log(list.sort(l10nDE.compare)) // [ "a", "ä", "z" ]
	console.log(list.sort(l10nSV.compare)) // [ "a", "z", "ä" ]
*/

if (N>1) break;

var list = [ "ä", "a", "z" ]
var l10nDE = new Intl.Collator("de")
var l10nSV = new Intl.Collator("sv")
assert.equal(l10nDE.compare("ä", "z"), -1);
assert.equal(l10nSV.compare("ä", "z"), +1);
assert.equal(JSON.stringify(list.sort(l10nDE.compare)), JSON.stringify([ "a", "ä", "z" ])); // [ "a", "ä", "z" ]
assert.equal(JSON.stringify(list.sort(l10nSV.compare)), JSON.stringify([ "a", "z", "ä" ])); // [ "a", "z", "ä" ]
