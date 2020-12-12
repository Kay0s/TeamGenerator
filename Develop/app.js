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

let team = [];

function manager() {
  console.log(team[0].role + "role");
  if (team[0].role === "Manager") {
    let manager = new Manager(team[0].name, team[0].id, team[0].email, team[1].officeNumber);
    console.log(manager);
  }
}

function engineer() {
  let engineer = new Engineer();
}
function intern() {
  let intern = new Intern();
}

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
        message: "What the team member's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team member's email?",
      },
      {
        type: "list",
        name: "role",
        message: "What is team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      team.push(answers);
      if (answers.role === "Manager") {
        inquirer
          .prompt([
            {
              message: "What is the office number?",
              name: "officeNumber",
            },
          ])
          .then((answers) => {
            team.push(answers);
            manager();
            console.log(team);
          });
      }
    });
}
// .then((answer) => {
//   if (answers.role === "Manager") {
//     manager();
//     inquirer.prompt([
//       {
//         message: "What is the office number?",
//         name: "officeNumber",
//       },
//     ]);
//   } else if (answer.role === "Engineer") {
//     engineer();
//     inquirer.prompt([
//       {
//         message: "What is the GitHub Username?",
//         name: "github",
//       },
//     ]);
//   } else {
//     intern();
//     inquirer.prompt([
//       {
//         message: "What is the school name?",
//         name: "school",
//       },
//     ]);
//   }
//   inquirer
//     .prompt([
//       {
//         message: "Would you like to add another team member?",
//         name: "addMember",
//       },
//     ])
//     .then((answer) => {
//       if (answer.addMember === "Yes") {
//         console.log("Team will be created!");
//       }
//     });
// });

generateTeam();
