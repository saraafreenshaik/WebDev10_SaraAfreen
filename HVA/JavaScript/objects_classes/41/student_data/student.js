// Define a Student class
class Student {
    constructor(id, name, age, grades) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grades = grades; // Array of numbers
    }

    // Calculate the average grade for the student
    getAverageGrade() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }
}

// Create an array to store student data
const students = [];

// Function to add a new student
function addStudent(id, name, age, grades) {
    const student = new Student(id, name, age, grades);
    students.push(student);
}

// Function to find a student by ID
function findStudentById(id) {
    return students.find(student => student.id === id);
}

// Function to calculate the average grade of all students
function calculateOverallAverageGrade() {
    const totalGrades = students.reduce((sum, student) => sum + student.getAverageGrade(), 0);
    return totalGrades / students.length;
}

// Example usage
addStudent(1, 'Alice', 20, [85, 90, 78]);
addStudent(2, 'Bob', 22, [88, 92, 79]);
addStudent(3, 'Charlie', 21, [95, 85, 84]);

const alice = findStudentById(1);
console.log(`Alice's average grade: ${alice.getAverageGrade()}`);

const overallAverage = calculateOverallAverageGrade();
console.log(`Overall average grade: ${overallAverage}`);
