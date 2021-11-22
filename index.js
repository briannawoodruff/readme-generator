// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input",
        message: "What is your GitHub username",
        name: "username"
    },
    {   
        type: "input",
        message: "What is your GitHub repo?",
        name: "repo"
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
        type: "checkbox",
        message: "What licenses are required with this project?",
        name: "licenses",
        choices: [' MIT', ' GPLv3', ' Apache 2.0', " None"]
    },
    {   
        type: "input",
        message: "Who were the contributors of this project?",
        name: "contributors"
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

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
 