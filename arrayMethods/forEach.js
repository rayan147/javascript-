/**
 * @name Array.prototype.forEach
 * @short // Iterates over the array, passing each value in turn to the callback.
 * @function  array.forEach(element => {
     
 }); 
 * @desc Iterates over the array, passing each value in turn to the callback.
 * @param {Function} callback The function to be called on each iteration.
 * @note forEach expects a synchronous function
 * @return undefined
 * **/

 const arr = [1, 2, 3, 4, 5];
 let sum  = 0;
const f = arr.forEach(function(element, index, array) {
    // console.log(element * 2);
});

// console.log(f); // undefined

let  sumF = async (a , b) => a + b

/** 
 * Note: forEach expects a synchronous function.
forEach does not wait for promises. Make sure you are aware of the implications 
while using promises 
(or async functions) as forEach callback.
 * **/
arr.forEach(async function (a,b){
    sum = await sumF(a, b)
});
console.log(sum); 
const m = arr.map(async (m)=> await sumF(m, m))

Array.prototype.MyforEach =function(callbackfn){
  for(let i = 0; i < this.length; i++){
    console.log(this[i]);
    callbackfn(this[i], i, array,this);
  }
  return;

}
arr.MyforEach(async function (a,b){
    sum = await sumF(a, b)
});