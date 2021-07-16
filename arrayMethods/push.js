/** 
 * @name Array.prorotype.push
 * @function
 * @description Adds one or more elements to the end of an array
 * @param {...*} args Elements to add to the array
 * @returns the new length of the array

 * **/

const a = [1, 2, 3];


Array.prototype.organicPush = function(...args) {
  let len = this.length;
  for (let i = 0; i < args.length; i++) {
    this[len + i] = args[i];
  }
  return this.length;
}
const r2 = a.organicPush(7, 8, 9);
console.log(a);
console.log(r2);