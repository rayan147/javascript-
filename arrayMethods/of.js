/** 
 * @name Array.prototype.of
 * @description  Creates a new Array instance with a variable number of arguments, 
 * regardless of number or type of the arguments
 * @returns {Array} 
 * **/
const r = Array.of(8)
const r2 = Array(8)
console.log(r) // [ 8 ]
console.log(r2) // [ <8 empty items> ]