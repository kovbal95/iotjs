//not_implemented //-good //finisd
/* as6 //formed
//  lib/math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593
//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))
//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))
*/

if (N>1000000) break;//needed

import * as math from "./lib/math";
console.log(math.sum(math.pi, math.pi) === 6.283186, true);
