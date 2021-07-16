const t1 = () => console.log('hello world')
const t2 = () => console.log('hello')
const t3 = () => console.log('world')
const t4 = () => console.log('hell')
const t5 = () => console.log('helloandworld')
const t6 = () => console.log('hellolordworld')
const arr =  [t1, t2, t3, t4, t5, t6]

console.log(arr.forEach(fn => fn()))


