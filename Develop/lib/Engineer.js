//require Employee class
const Employee = require("./Employee");

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

//export Engineer class
module.exports = Engineer;
