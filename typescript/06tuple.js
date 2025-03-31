/** @format */
/**
 * A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

// ! order does matter

*/
var tuple1 = [4, "r", true];
console.log(tuple1);
var tuple2 = [5, ["a", "b"], false, "hi"];
console.log(tuple2);
var tuple3;
tuple3 = [56, true];
console.log(tuple3);
// tuple3.push('a');
// tuple3.push("hello");
//! readonly
var tuple4 = [45, "hi"];
// tuple4.push('a');
console.log(tuple4);
// destructuring tuples
var graph = [4, 5];
// const [x, y] = graph;
// console.log(x, y);
console.log(graph);
var tuple6 = [1, "a"];
console.log(tuple6);
tuple6.pop();
console.log(tuple6);
// tuple6.push([1,2,2]) //error i.e. you can  only push data that is specified either string or number
tuple6.push(5); // data pushed can be number or strintg
tuple6.push("string");
console.log(tuple6);
var tuple7 = [[1, 2, 3], "a"];
// tuple7.push("string"); can't push or pop due to readonly
// ! named tuples provide a name to each type as done below
// Named tuples provide more context for what our index values represent.
var tuple8 = [1, "a"];
console.log(tuple8);
console.log(tuple8[0]);
console.log(tuple8[1]);
var tuple9 = [1, "a"];
console.log(tuple9);
console.log(tuple9[0]);
console.log(tuple9[1]);
// ! but to use a and b you need to use destructuring i.e.
var first = tuple9[0], second = tuple9[1];
console.log(first);
console.log(second);
