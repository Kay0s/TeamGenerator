const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const qs = [];


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

    const team = [];

    inquirer.prompt(qs).then((ans1) => {
     inquirer.prompt([
{
 when : () => ans1.role === "manager",
 type: "input",
 message: "What is their office number",
 name: "officeNumber",
},

            {
              type: "confirm",
              message: "Would you like to add another team member?",
              name: "addMember",
            },
          ])

.then((ans2) => {
  if (ans1.role === "manager") {
    manager = new Manager(ans1.name, ans1.id, ans1.email, ans1.role, ans2.officeNumber);
    team.push(manager);
    (answers.addMember)
    generateTeam();
  } else {
    manager();
  }
  }
  when : () => ans1.role === "engineer",
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
          .then((ans2) => {
            if (ans1.role === "engineer") {
              engineer = new Engineer(ans1.name, ans1.id, ans1.email, ans1.role, ans2.github);
              team.push(engineer);
              (answers.addMember)
              generateTeam();
            } else {
              engineer();
            }
            }
            when : () => ans1.role === "intern",
          .prompt([
            {
              type: "input",
              message: "What is the school's name?",
              name: "school",
            },
            {
              type: "confirm",
              message: "Would you like to add another team member?",
              name: "addMember",
            },
          ])
          .then((ans2) => {
            if (ans1.role === "intern") {
              intern = new Intern(ans1.name, ans1.id, ans1.email, ans1.role, ans2.school);
              team.push(intern);
              (answers.addMember)
              generateTeam();
            } else {
              intern();
            }
            }

        fs.writeFile(outputPath, render([team]), (err) => {
          if (err) {
            throw err;
          }
          console.log("Success, team HTML is created!");
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



