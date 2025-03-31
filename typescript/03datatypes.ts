/** @format */

// string
let str1 = "hello";
let str2 = "hello";
console.log(str1, str2, `${str1}`);

let str3: string;
str3 = "hello world";
console.log(str3);

//boolean
let isDone = true;
console.log(isDone);

//number
let binaryno = 0b111001; // starts with 0b then contains 0 and 1
let decimalno = 12.0;
let hexno = 0x37cf; // start with 0x then contains with number
let octalno = 0o377; // starts with 0o

let num1: number = 12;
let num2: number = 0b111001; // binary
let num3: number = 0x37cf; // hex
let num4: number = 0o377; // octal
let num5: number = 12.0; // decimal
// whether it is binary, decimal, hex or octal, all are same in type
// all are number type and answer recieved is in decimal
console.log(num1, num2, num3, num4, num5);

// num1 = "string"; // error: Type 'string' is not assignable to type 'number'

console.log(binaryno, decimalno, hexno, octalno);

// bigint
const bigvar = 467656758657858757576587;
console.log(bigvar);
console.log(typeof bigvar);

// null (whose value is undefined)
// let n1: number = null;
// console.log(n1);
// let n2: string = null;
// console.log(n2);
// let n3: boolean = null;
// console.log(n3);
