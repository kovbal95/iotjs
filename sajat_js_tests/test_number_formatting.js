//not_implemented //-good //finisd
/*es6 //formed
	var l10nEN = new Intl.NumberFormat("en-US")
	var l10nDE = new Intl.NumberFormat("de-DE")
	l10nEN.format(1234567.89) === "1,234,567.89"
	l10nDE.format(1234567.89) === "1.234.567,89"
*/



var l10nEN = new Intl.NumberFormat("en-US")
var l10nDE = new Intl.NumberFormat("de-DE")
assert.equal(l10nEN.format(1234567.89) === "1,234,567.89", true);
assert.equal(l10nDE.format(1234567.89) === "1.234.567,89", true);
