//require Employee class
const Employee = require("./lib/Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; // GitHub username
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer"; // Overridden to return 'Engineer'
  }
}

const engineer = new Engineer();

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();

//export Engineer class
module.exports = Engineer;
