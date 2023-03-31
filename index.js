
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown');
const questions = [
    "What is the title of your README?",
    "Please enter your description: ", 
    "What are the installation instructions?", 
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "Please choose your license: ", 
    "Please enter your Github user name: ",
    "Please enter your email address: ",
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generate.generateMarkdown(data), err => {
    if (err) {
      console.error(err);
    }
  });
}

function init() {

inquirer
.prompt([
  {
    type: 'input',
    message: questions[0],
    name: 'title',
  },
  {
    type: 'input',
    message: questions[1],
    name: 'description',
  },
  {
    type: 'input',
    message: questions[2],
    name: 'installation',
  },
  {
    type: 'input',
    message: questions[3],
    name: 'usageInformation',
  },
  {
    type: 'input',
    message: questions[4],
    name: 'contributionGuidelines',
  },
  {
    type: 'input',
    message: questions[5],
    name: 'testInstructions',
  },
  {
    type: 'list',
    message: questions[6],
    name: 'licenseChoice',
    choices: ['Apache License 2.0', 'Creative Commons Attribution 4.0', 'MIT', ]
  },
  {
    type: 'input',
    message: questions[7],
    name: 'githubName',
  },
  {
    type: 'input',
    message: questions[8],
    name: 'emailAddress',
  },
])
.then((data) =>
  writeToFile('sampleREADME.md', data)
);}

init();
