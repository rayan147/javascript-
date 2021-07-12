/** 
 * @name map()
 * @method myMap()
 * @description Returns a new array containing the results of calling a function on every element in this array.
 * @param {function} callbackfn,it takes @param thisArg as argument,
 * @param value,@param index,@param array as arguments. 
 * royalflute035
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => x * x)); 
Array.prototype.myMap = function(callbackfn, thisArg) {
    let result = [];
    for (let [index,each] of this.entries()) {
         result.push(callbackfn(each,index, thisArg,this));
    }
     return result;
}

console.log(arr.myMap((x,index,arr) => {
    console.log(x,index,this.length);
    return x * x;

},{name: "royalflute035"}));