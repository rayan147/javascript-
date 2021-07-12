/**
@description Removes elements from an array and returns them as a new array.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted
@method Array.splice()
@summary myArray.splice(start, deleteCount) actually removes the element, reindexes the array, and changes its length.
*/

const arr = [1, 2, 3, 4, 5];

// let removed = arr.splice(0,1);
// console.log(removed); // [2]
// console.log(arr); // [1, 3, 4, 5]

Array.prototype.remove = function(index) {
  let removed = []
 for (let [i,each] of this.entries()) {
     if (i !== index) {
       removed.push(each);
     } 
 }
 return removed;
}
const r = arr.remove(0)
console.log(r);
console.log(arr);