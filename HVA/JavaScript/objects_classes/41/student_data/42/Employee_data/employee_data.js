class Employee {
  constructor(id, name, email, age, department, position, salary) {
    if (!id || typeof id !== "number") throw new Error("Invalid ID.");
    if (!name || typeof name !== "string") throw new Error("Invalid name.");
    if (!email || !this.validateEmail(email)) throw new Error("Invalid email.");
    if (!age || typeof age !== "number" || age <= 0) throw new Error("Invalid age.");
    if (!department || typeof department !== "string") throw new Error("Invalid department.");
    if (!position || typeof position !== "string") throw new Error("Invalid position.");
    if (!salary || typeof salary !== "number" || salary <= 0) throw new Error("Invalid salary.");

    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = salary;
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

class EmployeeData {
  constructor() {
    this.employees = [];
  }

  // Add a new employee
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      console.log("Invalid employee data.");
      return;
    }

    const existingEmployee = this.employees.find(emp => emp.id === employee.id);
    if (existingEmployee) {
      console.log(`Employee with ID ${employee.id} already exists.`);
      return;
    }

    this.employees.push(employee);
    console.log(`Employee ${employee.name} added.`);
  }

  // Update employee data by ID
  updateEmployee(id, updatedData) {
    const employee = this.employees.find(emp => emp.id === id);
    if (employee) {
      if (updatedData.name && typeof updatedData.name !== "string") {
        console.log("Invalid name.");
        return;
      }
      if (updatedData.email && !this.validateEmail(updatedData.email)) {
        console.log("Invalid email.");
        return;
      }
      if (updatedData.age && (typeof updatedData.age !== "number" || updatedData.age <= 0)) {
        console.log("Invalid age.");
        return;
      }
      if (updatedData.salary && (typeof updatedData.salary !== "number" || updatedData.salary <= 0)) {
        console.log("Invalid salary.");
        return;
      }
      Object.assign(employee, updatedData);
      console.log(`Employee ${id} updated.`);
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
  }

  // Delete employee by ID
  deleteEmployee(id) {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      const removedEmployee = this.employees.splice(index, 1);
      console.log(`Employee ${removedEmployee[0].name} deleted.`);
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
  }

  // View all employees
  viewEmployees() {
    if (this.employees.length === 0) {
      console.log("No employees found.");
    } else {
      console.log("Employee List:");
      this.employees.forEach(emp => {
        console.log(
          `ID: ${emp.id}, Name: ${emp.name}, Email: ${emp.email}, Age: ${emp.age}, Department: ${emp.department}, Position: ${emp.position}, Salary: ${emp.salary}`
        );
      });
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Example usage:

const employeeData = new EmployeeData();

try {
  const emp1 = new Employee(1, "Alice", "alice@example.com", 30, "IT", "Developer", 80000);
  employeeData.addEmployee(emp1);

  const emp2 = new Employee(2, "Bob", "bob@example.com", 28, "Design", "Designer", 70000);
  employeeData.addEmployee(emp2);

  employeeData.viewEmployees();

  // Update employee data
  employeeData.updateEmployee(1, { name: "Alice Johnson", salary: 85000, age: 31 });
  employeeData.viewEmployees();

  // Delete an employee
  employeeData.deleteEmployee(2);
  employeeData.viewEmployees();
} catch (error) {
  console.error(error.message);
}
