/** @format */
// string
var str1 = "hello";
var str2 = "hello";
console.log(str1, str2, "".concat(str1));
var str3;
str3 = "hello world";
console.log(str3);
//boolean
var isDone = true;
console.log(isDone);
//number
var binaryno = 57; // starts with 0b then contains 0 and 1
var decimalno = 12.0;
var hexno = 0x37cf; // start with 0x then contains with number
var octalno = 255; // starts with 0o
var num1 = 12;
var num2 = 57; // binary
var num3 = 0x37cf; // hex
var num4 = 255; // octal
var num5 = 12.0; // decimal
// whether it is binary, decimal, hex or octal, all are same in type
// all are number type and answer recieved is in decimal
console.log(num1, num2, num3, num4, num5);
// num1 = "string"; // error: Type 'string' is not assignable to type 'number'
console.log(binaryno, decimalno, hexno, octalno);
// bigint
var bigvar = 467656758657858757576587;
console.log(bigvar);
console.log(typeof bigvar);
// null (whose value is undefined)
// let n1: number = null;
// console.log(n1);
// let n2: string = null;
// console.log(n2);
// let n3: boolean = null;
// console.log(n3);
