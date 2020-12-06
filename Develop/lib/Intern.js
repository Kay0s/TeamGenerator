//require Employee class
const Employee = require("./lib/Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Emmployee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  } // Overridden to return 'Intern'
}

const intern = new intern();

intern.getName();
intern.getId();
intern.getEmail();
intern.getGithub();
intern.getRole();

//export Intern class
module.exports = Intern;
