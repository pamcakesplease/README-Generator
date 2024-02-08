// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your projects title?"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: ["MIT", "AFL-3.0", "Apache-2.0", "BSL-1.0", "GPL", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Please list any dependencies"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this repo being used for?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Does this repo have any contributors?"
    }

])

.then((answers) => {
    const markdownContent = generateMarkdown(answers);

    fs.writeFile('README.md', markdownContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
