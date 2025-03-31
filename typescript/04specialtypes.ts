/** @format */

//  any  (disables type checking)
let u: any = 45;
console.log(u);
u = "hello";
console.log(u);
// let v = 56;
// v = "hi";

// unknown (it is strict in typing as you need to know what are you doing with variable before using it so it is better and very much different from any)
let value: unknown = "  abc ";
// value.trim(); will give error as you much know the type of value before using it exampel is below
if (typeof value === "string") {
  value.trim(); // will work
  console.log(value);
}
console.log(value);
let a: unknown = 57.8;
console.log(a);
// Math.round(a); // gives error
if (typeof a === "number") {
  Math.round(a);
  console.log(a);
}
a = "hi";
console.log(a);

// If you are sure about the type of unknown, you can cast it using the as keyword.
let b: unknown = "hello world";
console.log((b as string).length);

// never (when you use never you can't use the variable as we can't assign any data type to never)
// let v: never ='hellow';  gives error as never is not assignable to any type
// let v: never = 45; // gives error as never is not assignable to any type

// null and undefined  are used to defined undefined and null values
let x: undefined;
let y; // x and y both are undefined
console.log("x=", x, "and y=", y, "are undefined");

let a1: undefined = undefined; // undefined
let b1: null = null; // null
// let a2:undefined = null; // error as undefined is not assignable to null
// undefined means value is not assigned to the variable and null means value is assigned to the variable but it is empty
// let b2:null = undefined; // error as null is not assignable to undefined

let z = null;
let w: null = null;
console.log("z=", z, "and", "w=", w, "are null");
