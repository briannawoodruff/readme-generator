// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {   
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {   
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {  
        type: "input",
        message: "Write a description for your project.",
        name: "description"
    },
    {   
        type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {   
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {   
        type: "list",
        message: "What license does you project have?",
        name: "licenses",
        choices: ['MIT', 'GPLv3', 'Apache 2.0', "None"]
    },
    {   
        type: "input",
        message: "How can people contribute to this project?",
        name: "contributing"
    },
    {   
        type: "input",
        message: "How is this project tested?",
        name: "tests"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    console.log(markdown)
    console.log(data.licenses)

    fs.writeFile(fileName, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    const licenseType = data.licenses
    if (licenseType === 'MIT') {
        data.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        data.licenses = "Licensed under MIT License."
    } else if (licenseType === 'GPLv3') {
        data.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
        data.licenses = "Licensed under GPL v3 License."
    } else if (licenseType === 'Apache 2.0') {
        data.badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'
        data.licenses = "Licensed under Apache 2.0 License."
    } else if (licenseType === "None") {
      data.badge = ""
      data.licenses = ""
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        renderLicenseBadge(data)
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
