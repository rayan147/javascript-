/***
 *@name Array.prototype.entries
 *@returns {Array} Returns a new Array Iterator object that contains 
 the key/value pairs for each index in the array.
 *@short Creates an array of [key, value] pairs for the array.
 *@extra This method can be used to make a simple key/value list, 
 or to get an object representation of an array. 
 @summary entries() is a genarator that iterates  over an array, 
 returning an array of [key, value] pairs.
 ***/

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];


// const entr =() =>{
//   let a = [];
// for (const [i,each]of arr.entries()) {
//     // console.log(i,each);
//     a.push(i,each);
// }
// return a;
// }
// console.log(entr(arr));   
// // [0, 'a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 'g', 7, 'h', 8, 'i', 9, 'j']
// console.log(arr.entries().next().value);

function* entries(ar) {
  for (let i = 0; i < ar.length; i++) {
    yield [i, ar[i]];
  }
}
const g = []
for (const [i,each] of entries(arr)) {
    g.push(i,each);
}
console.log(g);
// console.log(entries(arr).next().value);