//require Employee class
const Employee = require("./lib/Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// methods:

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager"; // Overridden to return 'Manager'
  }
}

const manager = new Manager();
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();

//export the Manager class
module.exports = Manager;
