/**
 * A Type Alias allows you to create a custom name for a type. It helps improve code readability and reusability.
 *
 * 📌 Syntax of Type Alias
 * type TypeName = existingType;
 * variable : TypeName = value;
 *
 * @format
 */

type StudentID = number;
const id: StudentID = 1234567890;
console.log(id); // 1234567890

// type alias for object
type Studentyear = number;
type Studentname = string;
type Student = {
  name: Studentname;
  year: Studentyear;
};
const student: Student = {
  name: "John Doe",
  year: 2023,
};
console.log(student);

// ! -----------INTERFACE -------------
// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
  length: number;
  breadth: number;
}

const rectangle: Rectangle = {
  length: 40,
  // breadth:"able" Type 'string' is not assignable to type 'number'
  breadth: 50,
};
console.log(rectangle);
console.log(rectangle.length * rectangle.breadth);

// ? extending rectangle interface means another interface is inheriting the properties of another interface
interface Cuboid extends Rectangle {
  height: number;
}
const cuboid: Cuboid = {
  length: 40,
  // breadth:"able" Type 'string' is not assignable to type 'number'
  breadth: 50,
  height: 60,
};
console.log("cuboid: ", cuboid);
