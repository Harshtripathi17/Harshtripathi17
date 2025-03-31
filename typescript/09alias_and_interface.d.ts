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
declare const id: StudentID;
type Studentyear = number;
type Studentname = string;
type Student = {
    name: Studentname;
    year: Studentyear;
};
declare const student: Student;
interface Rectangle {
    length: number;
    breadth: number;
}
declare const rectangle: Rectangle;
interface Cuboid extends Rectangle {
    height: number;
}
declare const cuboid: Cuboid;
