/** 
 * @name Array.prototype.reverse
 * @desc Reverses the order of an array.
 * @returns a reversed array
 * @function
 * @param {None} 
 * **/

const ra = ['h', 'e', 'l','l','o'];



Array.prototype.organicReverse = function () {
    let end = this.length - 1;
  for(var i = end ; i >= this.length ; i--){
    console.log(this[i] = this[i -1]);
  }
  return this;
}


const ra2 = ra.organicReverse();
console.log(ra2);