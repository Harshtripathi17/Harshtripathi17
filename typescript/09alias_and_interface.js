/**
 * A Type Alias allows you to create a custom name for a type. It helps improve code readability and reusability.
 *
 * 📌 Syntax of Type Alias
 * type TypeName = existingType;
 * variable : TypeName = value;
 *
 * @format
 */
var id = 1234567890;
console.log(id); // 1234567890
var student = {
    name: "John Doe",
    year: 2023,
};
console.log(student);
var rectangle = {
    length: 40,
    // breadth:"able" Type 'string' is not assignable to type 'number'
    breadth: 50,
};
console.log(rectangle);
console.log(rectangle.length * rectangle.breadth);
var cuboid = {
    length: 40,
    // breadth:"able" Type 'string' is not assignable to type 'number'
    breadth: 50,
    height: 60,
};
console.log("cuboid: ", cuboid);
