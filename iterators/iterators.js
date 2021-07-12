
/*
 iterable protocol and iterator protocol.

iterator protocol.
 An object is an iterator when it implements an interface (or API) that answers two questions:

Is there any element left?
If there is, what is the element?
Technically speaking, an object is qualified as an iterator when it has a next() method that returns an object with two properties:

 done: a boolean value indicating whether or not  there are any more elements that could be iterated upon.
 value: the current element.
Each time you call the next(), it returns the next value in the collection:


*/
const log = context => console.log(context);
