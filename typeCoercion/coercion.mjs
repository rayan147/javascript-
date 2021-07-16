import assert from '../helper/helper.mjs';
import {log} from '../helper/log.mjs';
import {TypeOf} from "../helper/typeOf.mjs"
import {IsCallable} from "../helper/isCallable.mjs"
/** 
 * @name Coercion
 * @description type coercion converters a value to a specific type  to qualify it for a specific operation
 * **/

const multiply =(a,b)=> a * b 
const divide =(a,b)=> a / b

// coerce the string 10 to a number
log(assert.equal(divide('10',2),5))  // true


// coerce the string 9 to a number
log(assert.equal(multiply('9',2),18)) // true


/** 
 * How does it work?
 It uses the typeof operator to determine the type of the value passed in
 If it is a string, it will use the toString function to convert it to a number 
 */

 const convertStringToNumber =(a)=>{
  if(typeof a === 'string'){
    return Number(a)
  }
  return a
  }
  // shorthand 
  const convertStringToNumber2 = (a) => typeof a === 'string' ? Number(a) : a

log(assert.equal(convertStringToNumber2('10'),10)) // true
log(IsCallable(convertStringToNumber2) ) // true
log(TypeOf(convertStringToNumber2('15'))) // number
