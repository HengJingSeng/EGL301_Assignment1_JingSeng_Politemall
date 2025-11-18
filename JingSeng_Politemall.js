// Filename: JingSeng_Politemall.js
// Description: A Node.js module that manages modules, students, enrollments, and grades
// Author: Jing Seng
// Note: This module uses arrays to simulate a database for demonstration purposes.

// --- Simulated Database (Arrays) ---
// These arrays store the application's state.

// Stores module objects, e.g., { modulesName: "Web API", instructor: "Mr Tan" }
let modules_list = [
  { modulesName: "Web API", instructor: "Mr Tan" },
  { modulesName: "App Dev", instructor: "Mr Ang" }
];

// Stores student objects, e.g., { studentName: "Ah Kow" }
let students_list = [
  { studentName: "Ah Kow" },
  { studentName: "Ah Meng" }
];

// Stores enrollment objects, linking students to modulesName
// e.g., { student: "Ah Kow", modulesName: "Web API", grade: 92 }
let enrollments_list = [
  { studentName: "Ah Kow", modulesName: "Web API", grade: 92 },
  { studentName: "Ah Meng", modulesName: "App Dev", grade: 85 }
];


// --- Module Functions ---
//=============================================================================================
// 1. Lists all modules currently in the 'modules' array.
function listModules() {
  if (modules_list.length === 0) {
    return "No Module available.";
  }
  // Return the entire 'modules' array
  return modules_list;
}
//=============================================================================================
// 2. Adds a new module to the 'modules' array.
function addModule(moduleName, instructor) {
  if (!moduleName || !instructor) {
    return `Error: Please provide both a module name and an instructor.`;
  }

  let moduleFound = false;
  // Loop through existing modules to check for a name match
  for (let i = 0; i < modules_list.length; i++) {
    if (modules_list[i].modulesName.toLowerCase() === moduleName.toLowerCase()) {
      moduleFound = true;
      break; // Stop loop if duplicate is found
    }
  }

  if (moduleFound) {
    return `Module "${moduleName}" already exists.`;
  } else {
    // Add the new module object to the array
    modules_list.push({ modulesName: moduleName, instructor: instructor });
    return `Module "${moduleName}" added successfully.`;
  }
}
//=============================================================================================
// 3. Lists all students currently in the 'students' array.
function listStudents() {
  if (students_list.length === 0) {
    return "No students registered.";
  }
  // Return the entire 'students' array
  return students_list;
}
//=============================================================================================
// 4. Adds a new student to the 'students' array.
function addStudent(studentName) {
  let studentFound = false;
  // Loop through existing students to check for a name match
  for (let i = 0; i < students_list.length; i++) {
    if (students_list[i].studentName.toLowerCase() === studentName.toLowerCase()) {
      studentFound = true;
      break; // Stop loop if duplicate is found
    }
  }

  if (studentFound) {
    return `Student "${studentName}" already exists.`;
  } else {
    // Add the new student object to the array
    students_list.push({ studentName: studentName });
    return `Student "${studentName}" added successfully.`;
  }
}
//=============================================================================================
// 5. Enrolls a student in a module after checking if both exist.
function enrollStudent(studentName, moduleName) {
  // NOTE: Check 1 - Validate student exists
  let studentFound = false;
  for (let i = 0; i < students_list.length; i++) {
    if (students_list[i].studentName.toLowerCase() === studentName.toLowerCase()) {
      studentFound = true;
      break;
    }
  }
  if (!studentFound) {
    return `Student "${studentName}" not found.`;
  }

  // NOTE: Check 2 - Validate module exists
  let moduleFound = false;
  for (let i = 0; i < modules_list.length; i++) {
    if (modules_list[i].modulesName.toLowerCase() === moduleName.toLowerCase()) {
      moduleFound = true;
      break;
    }
  }
  if (!moduleFound) {
    return `module "${moduleName}" not found.`;
  }

  // NOTE: Check 3 - Validate enrollment doesn't already exist
  let enrollmentFound = false;
  for (let i = 0; i < enrollments_list.length; i++) {
    if (enrollments_list[i].studentName.toLowerCase() === studentName.toLowerCase() && 
    enrollments_list[i].modulesName.toLowerCase() === moduleName.toLowerCase()) {
      enrollmentFound = true;
      break;
    }
  }
  if (enrollmentFound) {
    return `${studentName} is already enrolled in ${moduleName}.`;
  }

  // If all checks pass, create the new enrollment
  enrollments_list.push({ studentName: studentName, modulesName: moduleName, grade: null });
  return `${studentName} enrolled in ${moduleName} successfully.`;
}
//=============================================================================================
// 6. Records a grade for a student's enrollment.
function recordGrade(studentName, moduleName, grade) {
  // Check if grade is not a number, or if it's less than 0 or greater than 100.
  if (typeof grade !== 'number' || grade < 0 || grade > 100) {
    return `Invalid grade. Grade must be a number between 0 and 100.`;
  }

  let enrollmentFound = false;
  // Loop through enrollments to find the matching record
  for (let i = 0; i < enrollments_list.length; i++) {
    if (enrollments_list[i].studentName.toLowerCase() === studentName.toLowerCase() && enrollments_list[i].modulesName.toLowerCase() === moduleName.toLowerCase()) {
      // Found it! Update the grade.
      enrollments_list[i].grade = grade;
      enrollmentFound = true;
      break;
    }
  }

  if (enrollmentFound) {
    return `Grade ${grade} recorded for ${studentName} in ${moduleName}.`;
  } else {
    // This message triggers if the student isn't enrolled in that module
    return `${studentName} is not enrolled in ${moduleName}.`;
  }
}
//=============================================================================================
// 7. Gets a report of all enrollments for a single student.
function getStudentReport(studentName) {
  // Create a new array to store just this student's records
  let studentReport_list = [];
  
  // Loop through all enrollments
  for (let i = 0; i < enrollments_list.length; i++) {
    if (enrollments_list[i].studentName.toLowerCase() === studentName.toLowerCase()) {
      // If the student name matches, add this object to the report
      studentReport_list.push(enrollments_list[i]);
    }
  }

  if (studentReport_list.length === 0) {
    return `${studentName} has no records.`;
  } else {
    // Return the new array containing only this student's records
    return studentReport_list;
  }
}
//=============================================================================================
// 8. Gets a list of student names enrolled in a specific module.
function getStudentsByModule(moduleName) {
  // Create a new array to store the names of students in this module
  let studentsInModule_list = [];

  // Loop through all enrollments
  for (let i = 0; i < enrollments_list.length; i++) {
    // If the modules name matches, add the student's name to the list
    if (enrollments_list[i].modulesName.toLowerCase() === moduleName.toLowerCase()) {
      studentsInModule_list.push(enrollments_list[i].studentName);
    }
  }

  if (studentsInModule_list.length === 0) {
    return `No students enrolled in ${moduleName}.`;
  } else {
    // Return the new array of student names
    return studentsInModule_list;
  }
}
//=============================================================================================
// 9. Resets all data by clearing the 'database' arrays.
function resetSystem() {
  // Re-assign the arrays to be empty
  modules_list = [];
  students_list = [];
  enrollments_list = [];
  return "System reset successful. All data cleared.";
}
//=============================================================================================

// --- Export Module ---
// This makes all 9 functions available to any file that 'requires' this module.
module.exports = {
  listModules, //1
  addModule,  //2
  listStudents, //3
  addStudent, //4
  enrollStudent, //5
  recordGrade, //6
  getStudentReport, //7
  getStudentsByModule, //8
  resetSystem //9
};