/** 
 * @name filter
 * @desc Returns a new array containing all elements of the calling array 
 * for which the provided filtering function returns true
 * @param {function} callbackfn takes  @param {object} thisArg,@param {array} arr, @param {number} index
 * @returns {array}
 * 
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter(function (each, index, arr) {
    return each * index < 10;
   
},{name: 'test'}));

Array.prototype.myFilter = function (callbackfn, thisArg) {
    let passed = [];
    for (let [index,each] of this.entries()) {
        if(callbackfn(each,index, thisArg,this)) {
         passed.push(each);
        }
    }
     return passed
}

console.log(arr.myFilter((each,index) => each * index < 10 ));
