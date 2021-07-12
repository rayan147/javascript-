/** 
 * @name reduceRightToLeft
 @param reducer funciton and initial value
 @description executes a reduce function on an array of values returning a single value
 @returns the result of the reduce function
 @method Array.reduceRightToLeft
 @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 @summary reduce from the lefthand side of the array to the righthand side. 
 it should be called reduceLeftToRight.
*/
const arr = [1,2,3,4,5,6,7,8,9,10];
const reducer = (accumulator, currentValue) => {
   return accumulator + currentValue}
//    console.log(arr.reduce(reducer,1));

Array.prototype.reduceLeftToRight = function(reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = reducer(accumulator, this[i]);
  }
  return accumulator;
}
Array.prototype.reduceLeftToRightOf= function(reducer, initialValue) {
    let currentValue = initialValue;
    for( let each of this ) {
        currentValue = reducer(each,currentValue );
    }
    return currentValue;
}

// console.log(arr.reduceLeftToRightOf(reducer,10));

const reduce = (array,accumulator, initialValue) => {
    let currentValue = initialValue
    for( let each of array ) {
        currentValue = accumulator(currentValue,each)
    }
    return currentValue
}
const reduceRecursive = (array,reducer, initialValue) => {
   if (array.length == 0) {
       return initialValue;
   }

   return reduce(array.slice(1),reducer, reducer(initialValue,array[0]));
}
console.log(reduceRecursive([1,2,3,4,5,6,7,8,9,10],(acc,val)=>{return acc+val},0)); 
// console.log(reduce([1,2,3,4,5,6,7,8,9,10],reducer,10));