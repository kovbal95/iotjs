//not_implemented //-good //finisd
/* es6 //formed
	//  lib/mathplusplus.js
	export * from "lib/math"
	export var e = 2.71828182846
	export default (x) => Math.exp(x)

	//  someApp.js
	import exp, { pi, e } from "lib/mathplusplus"
	console.log("e^{π} = " + exp(pi))
*/

if (N>500000) break;//needed

import exp, { pi, e } from "./lib/mathplusplus"
assert.equal(exp(pi) === 23.140700648952773, true);
