/** 
 * @name Promise 
 * @short Promise is standardized interface for asynchronous operations and callbacks.
 * @return {Promise} just a promise object. which is a future value.
 * @member thennable object.. object an object that has a then method.
 * **/
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function homeMadeOrganicPromise(excutor) {
   let state = PENDING;
   let value = null;
   let handlers = [];
   let catches = [];
    console.log('handlers',handlers);
   function resolve(result){
       if(state !== PENDING) return
       state = FULFILLED;
       value = result;
       handlers.forEach(handler => handler(value));
   }

   function reject(error){
       if(state !== PENDING) return
       state = REJECTED;
       value = error;
       catches.forEach(catcher => catcher(error));
   }
    
   this.then = function(callbackfn) {
    if(state === FULFILLED)
        callbackfn(value);
    else
        handlers.push(callbackfn);
    return this;
   }
   this.catch = function(callbackfn) {
    if(state === REJECTED)
        callbackfn(value);
    else
        catches.push(callbackfn);
    return this;
   }
   excutor(resolve, reject);
}

let promise = new homeMadeOrganicPromise(function(resolve, reject){
    setTimeout(function(){
        resolve("Hello world");
    }, 2000)
}
)
promise.then(function(value){
    console.log(value);
}).then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});
console.log("end");

console.log(promise);