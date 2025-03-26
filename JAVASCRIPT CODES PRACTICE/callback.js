/** @format */

// what is a callback function in javascript
// setTimeout(callback function, time in millisecond)
// setTimeout(function () {
//   console.log("timer");
// }, 1000);
// setTimeout(function () {
//   console.log("timer");
// }, 2000);
// setTimeout(function () {
//   console.log("timer");
// }, 3000);
// setTimeout(function () {
//   console.log("timer");
// }, 4000);
setTimeout(function () {
  console.log("timer"); // 5000 millisecond = 5 second
}, 5000);
function x(y) {
  y();
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

//  creating  a listener which will listen to id of button click me
//! way 1 to show button is clicked and no. of times it is clicked but it is brute force
//? using global variable is not solution as it can be modified
// let count = 0;
// document
//   .getElementById("clickMe")
//   .addEventListener("click", function clickMe() {
//     // callback function
//     console.log("button clicked--", count++);
//   });

//! way 2 using closures which helps in securing data
function attachEventListener() {
  let count = 0;
  document
    .getElementById("clickMe")
    .addEventListener("click", function clickMe() {
      // callback function
      console.log("button clicked--", count++);
    });
}
attachEventListener();

// garbage collection and removeeventlisteners
/*
! eventlisteners are heavy 
! i.e. they take memory
! whenever we attach an eventlistener they form a closure
! even when the call stack is empty then also memory is allocated 
*/