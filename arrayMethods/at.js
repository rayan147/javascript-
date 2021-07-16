require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });

/** 
 * @name Array.prototype.at
 * @short At Returns the array item at the given index. Accepts 
 * negative integers, which count back from the last item.
 * @returns {*  } The array item at the given index.    
 * **/ 

const arr = [1, 2, 3, 4, 5];

Array.prototype.at = function (index) {
  if(index < 0){
    index = this.length + index;
  }
  if(index !== 'number'){
    const n = parseInt(index);
    return this[n];
  }
  if(index >= this.length) {
    return undefined;
  }

  return this[index];
}

const  t = arr.at(-2);
const t2 = arr.at(52);
console.log(t2);