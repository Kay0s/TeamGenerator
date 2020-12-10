const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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
        validate: answer => {
          if (answer === ""){
            return true;
          }
          return "Please enter at least one character.";
        }
      },
    
      {
        type: "input",
        name: "id",
        message: "What the team member's id?",
        validate: answer => {
      if (answer === 'number' ) {
        return true;
      }
      return "Team member id must include a number.";
    }
  },
      {
        type: "input",
        name: "email",
        message: "What is the team member's email",
        validate: answer => {
      if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
        return true;
        }
        return "Please enter a valid email address";
      }
      },
      {
        type: "list",
        name: "role",
        message: "What is team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
        validate: answer => {
          if (answer === ""){
            return true;
          }
          return "Please choose team member's role.";
        }
      },
    ])  
    .then((answer, choices) => {
    if (choices === "Manager"){
    inquirer.prompt([  
      {
        message:"What is the office number?",
        name: "officeNumber",
      },
    } else if (choices === "Engineer"){
      inquirer.prompt([  
        {
          message:"What is the GitHub Username?",
          name: "github",
        },
      } else (choices === "Intern") {
        inquirer.prompt([  
          {
            message:"What is the school name?",
            name: "school",
          },
        })
        