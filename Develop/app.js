const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
console.log(Manager);

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; wrgetRole(); // Returns 'Employee'ite your code to ask different questions via inquirer depending on
// employee type.
// Write code to use inquirer to gather information about the development team members,
//Employee ?s: name, role, ID, email,
//Manager?s: name, role, ID, email, and Office number
//Engineer?s: name, role, ID, email, and GitHub
//Intern?s : name, role, ID, email, and School
// array of questions for user

const team = [];

function generateTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team member's name?",
      },
      
      {
        type: "input",
        name: "id",
        message: "What is team member's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team member's email?",
      },
      {
        type: "list",
        name: "role",
        message: "What role would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    