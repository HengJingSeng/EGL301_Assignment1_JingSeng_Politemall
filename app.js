// app.js
// Author: Jing Seng

// Import your node module
// Make sure the filename matches EXACTLY with your module file name
const Politemall = require("./JingSeng_Politemall.js");

console.log("=== Testing Jing Seng Politemall Module ===\n");

// 1. List existing Modules
console.log("1. List Modules:");
console.log(Politemall.listModules());
console.log("\n");

// 2. Add new Module
console.log("2. Add Module:");
console.log(Politemall.addModule("Cyber Security")); //error
console.log(Politemall.addModule("Cyber Security", "Mr Lim"));
console.log(Politemall.addModule("Cyber Security", "Mr Lim")); // Duplicate test
console.log("\n");

// 3. List students
console.log("3. List Students:");
console.log(Politemall.listStudents());
console.log("\n");

// 4. Add new student
console.log("4. Add Student:");
console.log(Politemall.addStudent("Ah Huat"));
console.log(Politemall.addStudent("Ah Huat")); // Duplicate test
console.log("\n");

// 5. Enroll student into module
console.log("5. Enroll Students:");
console.log(Politemall.enrollStudent("Ah Kow", "Web API"));
console.log(Politemall.enrollStudent("Ah Huat", "Cyber Security"));
console.log(Politemall.enrollStudent("Unknown Student", "Cyber Security")); // Student not found
console.log(Politemall.enrollStudent("Ah Huat", "Unknown Module")); // Module not found
console.log("\n");

// 6. Record grades
console.log("6. Record Grades:");
console.log(Politemall.recordGrade("Ah Kow", "Web API", 95));
console.log(Politemall.recordGrade("Ah Huat", "Cyber Security", 88));
console.log(Politemall.recordGrade("Unknown", "Web API", 50)); // Not enrolled
console.log(Politemall.recordGrade("Ah kow", "Web API", "Not a grade")); // Not enrolled
console.log(Politemall.recordGrade("Ah kow", "Web API", 111)); // Not enrolled
console.log("\n");

// 7. Get student report
console.log("7. Student Report (Ah Kow):");
console.log(Politemall.getStudentReport("Ah Kow"));
console.log("\n");

console.log("8. Student Report (Non-existing student):");
console.log(Politemall.getStudentReport("Nobody"));
console.log("\n");

// 9. Get students by module
console.log("9. Students in Cyber Security:");
console.log(Politemall.getStudentsByModule("Cyber Security"));
console.log("\n");

// 10. Reset system
console.log("10. Reset System:");
console.log(Politemall.resetSystem());
console.log("\n");

// 11. Verify reset worked
console.log("11. Verify After Reset:");
console.log("Modules:", Politemall.listModules());
console.log("Students:", Politemall.listStudents());
console.log("Enrollments for Ah Kow:", Politemall.getStudentReport("Ah Kow"));
console.log("\n");

console.log("=== End of Test ===");
