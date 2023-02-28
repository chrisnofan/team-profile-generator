// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Import the parent class Employee
const Employee = require("./Employee");

// Define and export the Manager class, which should inherit from Employee parent class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) { 
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // method getofficeNumber()
    getOfficeNumber() {
        return this.officeNumber;
   }
    // method getRole()—overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
