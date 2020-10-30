// Examples
// console.log(name); // ReferenceError: name is not defined

// What went wrong here?
// let foo = 'bar';
// console.log(foo.substring(0)) // ReferenceError: Cannot access 'foo' before initialization

// What's wrong here?
// function addNumbers() { 
//     let num1 = 2;
//     let num2 = 3;
//     return num1 + num2;
//     console.log(num1); // ReferenceError num1 is not defined.
//   }
  

/****************************************************************************
Make 3-5 different examples of reference errors. 
Look at the console to see what line the error is on to know what to do when 
coming in contact with that error 

RESOURCE: CHECK THE README
****************************************************************************/

// Error 1
// function error1() {
//   let variable1 = 12;
//   if (true) {
//     let variable1 = (variable1 + 2);
//   }
// }
// error1();

// Error 2
// let hi = {};
// hi.hello;

// Error 3
// function myFunc() {
//   if (myFunc.called == null) {
//     return 'hello';
//   } else {
//     return 'goodbye' + myFunc.caller;
//   }
// }
// myFunc();


// Error 4
let a = 2;
console.log(b);

// Error 5