/** @format */

let array1: number[] = [1, 2, 3];
// array1.push('string'); gives error as array1 is of type number
array1.push(4);
console.log(array1);

// readonly
let array2: readonly number[] = [1, 2, 3];
// array1.push('string'); gives error as array1 is of type number
// array2.push(4);
console.log(array2);

let array3 = ["a", "b", "c"]; // compiler will implicitly know that type of array3 is string
array3.push("d");
// array3.push(3); gives error
console.log(array3);

// let array4:string = ["a"] // gives error as string means a single word but
// !or an array you should write datatype[]
let array4: string[] = ["a", "b"];
console.log("array4: ", array4);
array4.push("c");
console.log("array4 after pushing c:", array4);
array4.pop();
console.log("array4: after poping", array4);

const array5 = [1, 2, 3];
array5.push(4);
console.log(array5);
