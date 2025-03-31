/** @format */

const nameage: { index: number; mark: number } = {
  index: 45,
  mark: 78,
};
console.log(nameage, nameage.index, nameage.mark);

// can't access objects like array
// console.log(nameage[0]); // ❌ Error: Property '0' does not exist
// console.log(nameage[1]); // ❌ Error: Property '1' does not exist

// ! If You Want an Array-Like Structure, Use an Array of Objects
const Student1 = [
  { name: "A", rollno: 1 },
  { name: "B", rollno: 2 },
  { name: "C", rollno: 3 },
];
console.log("Student1[0]: ", Student1[0]);
console.log("Student1[1]: ", Student1[1]);
console.log("Student1[2]: ", Student1[2]);
console.log("Student1[2].name: ", Student1[2].name);

// !Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
// const car1: { type: string; mileage: number } = {
//   type: "Toyota",
// };
// ! optional property variable?:type means whether you write it or not inside the object or error will give no error
const car: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
console.log(car);
car.mileage = 2000;
console.log(car);

// !-----------------INDEX SIGNATURE-----------------------
/*
? An index signature allows an object to have dynamic keys (keys that are not pre-defined). This is useful when we don’t know the exact 
? property names in advance but want to enforce a specific type for their values.

Syntax of Index Signature
type ObjectType : { [key: KeyType]: ValueType } = {};
key → The type of the key (usually string or number).

value → The type of the values stored.
*/
const student1: { [index: string]: number } = {};
student1["age"] = 23;
student1[23] = 23; // 23 inside [] is treated as string
console.log(student1);
// student1["age"]="age" //Type 'string' is not assignable to type 'number'
const student2: { [index: string]: number[] | string } = {};
student2[1] = [12, 13];
student2[2] = "Harsh";
console.log(student2);
