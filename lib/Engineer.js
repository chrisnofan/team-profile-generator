// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Import Employee parent class
const Employee = require("./Employee");

// Define and export the Engineer class, which should inherit from Employee parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // method getGithub()
    getGithub() {
        return this.github;
    }
    // method getRole()—overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;