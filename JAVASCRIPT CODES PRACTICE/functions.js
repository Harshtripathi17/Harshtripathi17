/** @format */

// function statement
function a() {
  console.log("a() is function statement");
}
a();

//!----------------------------------------------------------------
// function expression
// ? when a function is assigned to a variable
var a = function b() {
  console.log("b() is function expression");
};
b();

// ! difference between function statemnt and function expression is hoisting
/* 
a();
b();
function a() {
  console.log("a() is function statement");
}

var a = function b() {
  console.log("b() is function expression");
};

execute the above code a () will be executed as a fn. has its own memory but 
b() is stored in a variable which in start is undefined so can't be called
*/

//!----------------------------------------------------------------
// function declaration

//!----------------------------------------------------------------
// anonymous function

//!----------------------------------------------------------------
//named function expression

//!----------------------------------------------------------------
// difference between parameters and arguments

//!----------------------------------------------------------------
// first class function

//!----------------------------------------------------------------
// arrow function
