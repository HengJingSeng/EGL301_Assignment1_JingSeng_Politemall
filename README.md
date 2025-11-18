[![Contributors][contributors-shield]][contributors-url]
[![Unlicense License][license-shield]][license-url] 
[![LinkedIn][linkedin-shield]][linkedin-url]

# JingSeng_Politemall.js
<img src="https://stms.polite.edu.sg/kp/student/ImagesExt/image11_44.png" width="400">

This is a Node.js module created for the EGL301 assignment. It simulates a school management system name "Politemall" which manage modules, students, and enrollments.

The module is designed to be imported by another Node.js application. It does not provide a user interface on its own. All data is stored in in-memory arrays to simulate a database.

---
### Built With
* [![Node][Node.js]][Node-url]
* [![JavaScript][JavaScript.js]][JavaScript-url]


---
### In-Memory Database

The module starts with a pre-populated, in-memory "database" using simple JavaScript arrays.

```js
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
```
---

## Functions

This module provides a set of functions to manage modules, students, enrollments, and grades. Below is a detailed overview: <br>
keyword: List, Add, Enrol, Record, Get, Reset

---

### 1. **`listModules()`**
- **Return Type:** `Object[]`  
- **Description:** Retrieves an array of all available modules in the system.

---

### 2. **`addModule(moduleName, instructor)`**
- **Return Type:** `String`  
- **Parameters:**  
  - moduleName : String 
  - instructor : String 
- **Description:** Adds a new module to the system.

---

### 3. **`listStudents()`**
- **Return Type:** `Object[]`  
- **Description:** Returns an array of all registered students.

---

### 4. **`addStudent(studentName)`**
- **Return Type:** `String`  
- **Parameters:**  
  - studentName : String   
- **Description:** Registers a new student in the system.

---

### 5. **`enrollStudent(studentName, moduleName)`**
- **Return Type:** `String`  
- **Parameters:**  
  - studentName : String
  - moduleName : String  
- **Description:** Enrolls an existing student into a specific module.

---

### 6. **`recordGrade(studentName, moduleName, grade)`**
- **Return Type:** `String`  
- **Parameters:**  
  - studentName : String
  - moduleName : String   
  - grade : int 
- **Description:** Records or updates a grade for a student in a specific module.

---

### 7. **`getStudentReport(studentName)`**
- **Return Type:** `Object` or `String`  
- **Parameters:**  
  - studentName : String   
- **Description:** Retrieves the details and enrollment information of a specific student.

---

### 8. **`getStudentsByModule(moduleName)`**
- **Return Type:** `Object[]` or `String`  
- **Parameters:**  
  - moduleName : String   
- **Description:** Finds and returns all students enrolled in a specific module.

---

### 9. **`resetSystem()`**
- **Return Type:** `String`  
- **Description:** Resets all in-memory arrays (modules, students, and enrollments) back to their default pre-populated state.


---

## How to Use

This module is a local Node.js file and is not published to npm. To use it, you must require it locally from another JavaScript file.

### Prerequisites

* You must have [Node.js](https://nodejs.org/) installed on your machine.

### Project Setup

1.  Create a folder for your project (e.g., `egl301-assignment`).
2.  Save your module file inside this folder as `JingSeng_Politemall.js`.
3.  Create a second file in the *same folder* to run your tests (e.g., `app.js`).

### Your project structure should look like this:

---

#### your-project-folder/ <br>
#### ├── JingSeng_Politemall.js (Your module file) <br>
#### └── app.js (The file you will run)

---

### Running the Example

1.  Copy the example code from the "Usage Example" section below and paste it into your `app.js` file.
2.  Open your terminal or command prompt.
3.  Navigate to your project folder using the `cd` command:
    ```bash
    cd path/to/your-project-folder
    ```
4.  Run the `app.js` file using Node.js:
    ```bash
    node app.js
    ```
5.  You will see the complete test output printed to your console, starting with "=== Testing Jing Seng Politemall Module ===".

---

### Example (`app.js`)

Here is a simple example of how to import the module and use its functions.

```js
const Politemall = require('./JingSeng_Politemall.js');


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
```

---

# References

(School Management) Reference Website: https://nyplms.polite.edu.sg/d2l/home/7335

[contributors-shield]: https://img.shields.io/github/contributors/HengJingSeng/EGL301_Assignment1_JingSeng_Politemall.svg?style=for-the-badge
[contributors-url]: https://github.com/HengJingSeng/EGL301_Assignment1_JingSeng_Politemall/graphs/contributors

[license-shield]: https://img.shields.io/badge/license-Unlicense-blue.svg?style=for-the-badge
[license-url]: http://unlicense.org/

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/heng-jing-seng-b659b7271/


[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[JavaScript.js]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript


## Author

**Jing Seng**
* GitHub: [@Jingseng_GitHub](https://github.com/HengJingSeng)
* Politemall: EGL301 Assignment
---
## Contributers

<a href="https://github.com/HengJingSeng/EGL301_Assignment1_JingSeng_Politemall/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=HengJingSeng/EGL301_Assignment1_JingSeng_Politemall" alt="contrib.rocks image" />
</a>

---
## Contact

Project Link: [https://github.com/HengJingSeng/EGL301_Assignment1_JingSeng_Politemall](https://github.com/HengJingSeng/EGL301_Assignment1_JingSeng_Politemall)


---
## License

