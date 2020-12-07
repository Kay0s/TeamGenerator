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

async function userPrompts() {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
    },
    {
      type: "list",
      name: "role",
      message: "Who would you like to add?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);

  switch (userInput.role) {
    case "Manager":
      const officeNumberPrompt = await inquirer.prompt([
        {
          type: "input",
          name: "officeNumber",
          message: "What is your office number?",
        },
      ]);
      let managerInfo = new Manager(userInput.name, userInput.id, userInput.email, officeNumberPrompt.officeNumber);
      return managerInfo;

    case "Engineer":
      const githubPrompt = await inquirer.prompt([
        {
          type: "input",
          name: "github",
          message: "What is your GitHub Username?",
        },
      ]);
      let engineerInfo = new Engineer(userInput.name, userInput.id, userInput.email, githubPrompt.github);
      return engineerInfo;

    case "Intern":
      const schoolPrompt = await inquirer.prompt([
        {
          type: "input",
          name: "currentSchool",
          message: "What is your current school?",
        },
      ]);
      let internInfo = new Intern(userInput.name, userInput.id, userInput.email, schoolPrompt.currentSchool);
      return internInfo;

    default:
      cconsole.log("Working");
  }
}
async function team() {
  const team = [];
  let newTeamMember = await userPrompts();
  team.push(newTeamMember);
  console.log(team);
}

team();

// function to write HTML file
function render(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => {
    if (err) {
      console.log(error, "Please resubmit your answers.");
    }
  });
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers, "Success!  Team HTML generated");
    writeToFile("createdTeam.Html", render(answers));
  });
};

// function call to initialize program
init();

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information.

//Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
