
// function* generator(i) {
//     yield i;
//     yield i + 10;
//   }
  
//   const gen = generator(10);
  
//   console.log(gen.next().value);
//   // expected output: 10
  
//   console.log(gen.next().value);
//   // expected output: 20

  function* idMaker() {
    var index = 0;
    while (true)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next().value); // 3
  // ...