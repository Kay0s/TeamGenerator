const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];

function manager() {
  console.log(team);
  if (team[0].role === "Manager") {
    render(new Manager(team[0].name, team[0].id, team[0].email, team[1].officeNumber));
    console.log(render(myManager));
    render(myManager);
    console.log(render(myManager));
  }
}

function engineer() {
  console.log(team);
  if (team[0].role === "Engineer") {
    let engineer = new Engineer(team[2].name, team[2].id, team[2].email, team[3].github);
    console.log(engineer);
  }
}

function intern() {
  console.log(team);
  if (team[0].role === "Intern") {
    let intern = new Intern(team[4].name, team[4].id, team[4].email, team[5].school);
    console.log(intern);
  }
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
              type: "input",
              message: "What is the office number?",
              name: "officeNumber",
            },
            {
              type: "confirm",
              message: "Would you like to add another team member?",
              name: "addMember",
            },
          ])

          .then((answers) => {
            team.push(answers);

            if (answers.addMember) {
              generateTeam();
            } else {
              manager();
            }
          });
      } else if (answers.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the GitHub Username?",
              name: "github",
            },
            {
              type: "confirm",
              message: "Would you like to add another team member?",
              name: "addMember",
            },
          ])
          .then((answers) => {
            team.push(answers);

            if (answers.addMember) {
              generateTeam();
            } else {
              engineer();
            }
          });
      } else {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the school name?",
              name: "school",
            },
            {
              type: "confirm",
              message: "Would you like to add another team member?",
              name: "addMember",
            },
          ])
          .then((answers) => {
            team.push(answers);

            if (answers.addMember) {
              generateTeam();
            } else {
              intern();
            }
          });
        fs.writeFile(outputPath, render(manager), (err) => {
          if (err) {
            throw err;
          }
          console.log("Success!");
        });
      }
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
}

generateTeam();
