//not_implemented //-good //finisd
/*es6 //formed
	var l10nEN = new Intl.DateTimeFormat("en-US")
	var l10nDE = new Intl.DateTimeFormat("de-DE")
	l10nEN.format(new Date("2015-01-02")) === "1/2/2015"
	l10nDE.format(new Date("2015-01-02")) === "2.1.2015"
*/

if (N>1) break;

var l10nEN = new Intl.DateTimeFormat("en-US")
var l10nDE = new Intl.DateTimeFormat("de-DE")
assert.equal(l10nEN.format(new Date("2015-01-02")) === "1/2/2015", true);
assert.equal(l10nDE.format(new Date("2015-01-02")) === "2.1.2015", true);
