/**
 * var has global scope
 * let and const has block scope
 *
 * for a function - var, let and const will only be accessible inside the function , outside the function
 * it will give error
 *
 * for  a block
 * {
 * // this is a block scope
 * let and const will be accessible inside the block scope and var will have global scope
 *
 * let and const do not have global scope
 * if u use let and const globally, then also they are created in a separate memory
 * }
 *
 * @format
 */

console.log("first v1: ", v1);
// console.log("first l1: ", l1);
// console.log("first c1: ", c1);

/*
! let and const are hoisted but in a different way from that of var as from the point
! where let and const are hoisted to the point where let and const are declared and initialized 
! they are in temporal dead zone.
*/
var v1 = 20;
let l1 = 10;
const c1 = 30;
console.log("first v1: ", v1);
console.log("first l1: ", l1);
console.log("first c1: ", c1);

{
  v1 = 100;
  console.log("second v1: ", v1);
  l1 = 40;
  console.log("second l1: ", l1);
  console.log("second c1: ", c1);
}
console.log("3rd v1: ", v1);
console.log("3rd l1: ", l1);
console.log("3rd c1: ", c1);

function calling() {
  v1 = 90;
  l1 = 200;
  //   c1 = 200; can't assign another value
  console.log("4th v1: ", v1);
  console.log("4th l1: ", l1);
  console.log("4th c1: ", c1);
}
calling();
console.log("5th v1: ", v1);
console.log("5th l1: ", l1);
console.log("5th c1: ", c1);

{
  var v2 = 20;
  let l2 = 40;
  const c2 = 60;
  console.log(
    "=========================================================================="
  );
  console.log("first v2: ", v2);
  console.log("first l2: ", l2);
  console.log("first c2: ", c2);
}
console.log("second v2: ", v2);
// ! due to block scope l2 and c2 can't be accessed outside the block
// console.log("second l2: ", l2);
// console.log("second c2: ", c2);

console.log(
  "============================function==============================="
);
//! anything either let or const or var declared inside a funtion can't be accessed outside
//! the function
function call() {
  var v3 = 90;
  let l3 = 200;
  const c3 = 100;
  console.log("first v3: ", v3);
  console.log("first l3: ", l3);
  console.log("first c3: ", c3);
}
call();
// console.log("second v3: ", v3);
// console.log("second l3: ", l3);
// console.log("second c3: ", c3);

let a = 20;
//! let a=40;  Cannot redeclare block-scoped variable 'a
