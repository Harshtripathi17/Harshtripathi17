/** @format */

enum Role {
  User,
  Admin,
  SuperAdmin,
}
let userRole: Role = Role.User;
let adminRole: Role = Role.Admin;
console.log(userRole); // 0
console.log(adminRole); // 1
console.log(Role[0]); // User
console.log(Role[1]); // Admin

enum StudentDetail {
  age = 5, // giving age value
  name, // becomes 6
  rollno, // 7
}
console.log(StudentDetail);
console.log(StudentDetail.age);
console.log(StudentDetail.name);
console.log(StudentDetail.rollno);

// you can specify differents values to the enum variables
enum StudentDetails {
  age = 5, // giving age value
  name, // becomes 6
  rollno = 9, // 7
}
console.log(StudentDetails);
console.log(StudentDetails.age);
console.log(StudentDetails.name);
console.log(StudentDetails.rollno);
