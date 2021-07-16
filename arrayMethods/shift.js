/** 
 * @name Array.prototype.shift
 * @function shift
 * @description Removes the first element from an array and returns that element.
 * @returns {Any} The first element of the array.
 * **/


const arr = [1, 2, 3, 4, 5];

Array.prototype.myShift = function () {
    return this.splice(0, 1).join();
}
Array.prototype.myShift02 = function () {
    // does not modifiy the original array
    const result = this.length > 0 ? this[0] : null;
    this[0]= this[];
    return result;
}

const result = arr.myShift02();
console.log(arr);
console.log(result);