// TODO: Write code to define and export the Employee class
//Create the emplyee class
class Employee {
    // constructor for employee class
    constructor(name, id, email) { 
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method getName()
    getName() {
        return this.name;
    }
    // method getId()
    getId() {
        return this.id;
    }
    // method getEmail()
    getEmail() {
         return this.email;
    }
    // method getRole()—returns 'Employee'
    getRole() {
        return "Employee";
    }
}
//Export employee
module.exports = Employee;