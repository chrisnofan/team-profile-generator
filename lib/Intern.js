// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//import the parent class Employee
const Employee = require("./Employee");

// Define and export the Intern class, which should inherit from Employee parent class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // method getSchool()
    getSchool() {
        return this.school;
    }
    // method getRole()—overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
