# Team HTML File Using Inquirer NPM

![badge](https://img.shields.io/badge/License-mit-blue)

## Overview

As a manager, I want to be able to dynamically and quickly create a HTML files with employee's information using answers
provided from Inquirer NPM.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed](#deployed)
- [Tools](#tools)
- [Research](#research)
- [Questions](#questions)
- [License](#license)

## Description

To dynamically and quickly create a team HTML page, Inquirer NPM was utilized to:

- Generate command-line questions to the user.
- The user input was gathered and added as information to employee templates to create HTML pages.

## Installation

1. Create a .gitignore file and include node_modules? and .DS store. This ensures that the node_modules directory isn't
   tracked or uploaded to GitHub.
2. Use the command-line, npm install, to install Inquirer NPM.
3. To start answering questions to create the HTML file, use the command, node app.js.

## Usage

- Inquirer NPM is used to prompt the user to provide information regarding their employee teams to create their HTML
  pages.
- fs.writeFile is used to render the HTML.
- Once the user's information regarding:
  - name, id, email, member's role, then subsequent user role questions are served:
  - Manager - office, Engineer - Github Username, and Intern - school name.
- An HTML file with the user's reponses regarding their team is created.

## Deployed

- \*[Demo Video](https://youtu.be/ObRt8Nd-Nxk)
- \*[Deployed website](https://kay0s.github.io/https://kay0s.github.io/TeamGenerator/)
- \*[GitHub Repository](https://github.com/Kay0s/TeamGenerator)

### Screenshot of Passed Jest Test

![Screenshot of Passed Jest Test](./generatedScreenshot.jpg)

### Screenshot of Inquirer Questions Code

![Screenshot of Inquirer Questions Code](./codeScreenshot.jpg)

## Tools

- JavaScript
- Inquirer NPM
- .gitignore
- Git Bash

## Research

- [Inquirer.js - NPM](https://www.npmjs.com/package/inquirer)

## Questions

- [Email](hamilton.kristina@gmail.com)
- [GitHub Profile](https://github.com/Kay0s)
- [GitHub Repository](https://github.com/Kay0s/https://github.com/Kay0s/TeamGenerator)

## License

![badge](https://img.shields.io/badge/License-mit-blue)

© 2020 Kristina Hamilton and Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved. Permission is hereby
granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
