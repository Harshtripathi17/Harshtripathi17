/** @format */
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var userRole = Role.User;
var adminRole = Role.Admin;
console.log(userRole); // 0
console.log(adminRole); // 1
console.log(Role[0]); // User
console.log(Role[1]); // Admin
var StudentDetail;
(function (StudentDetail) {
    StudentDetail[StudentDetail["age"] = 5] = "age";
    StudentDetail[StudentDetail["name"] = 6] = "name";
    StudentDetail[StudentDetail["rollno"] = 7] = "rollno";
})(StudentDetail || (StudentDetail = {}));
console.log(StudentDetail);
console.log(StudentDetail.age);
console.log(StudentDetail.name);
console.log(StudentDetail.rollno);
var StudentDetails;
(function (StudentDetails) {
    StudentDetails[StudentDetails["age"] = 5] = "age";
    StudentDetails[StudentDetails["name"] = 6] = "name";
    StudentDetails[StudentDetails["rollno"] = 9] = "rollno";
})(StudentDetails || (StudentDetails = {}));
console.log(StudentDetails);
console.log(StudentDetails.age);
console.log(StudentDetails.name);
console.log(StudentDetails.rollno);
