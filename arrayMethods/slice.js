/**
 * @name slice
 @description Array.slice() copies an array's contents into a new array.
 @method new_array = your_array.slice( start_index , end_index );
 @summary This creates a completely new array, not a reference.
 @returns a new array.
*/
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(2,3);
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr);