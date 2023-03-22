// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your README?",
    "Please enter your description?", 
    "What are the installation instructions", 
    "What is the usage information?",
    "What is the contribution guidelines",
    "What are the test instructions?",
    "Please choose your license",
    "Please enter your Github user name",
    "Please enter your email address",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'password',
    message: 'What is your password?',
    name: 'password',
  },
  {
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
  },
])
.then((response) =>
  response.confirm === response.password
    ? console.log('Success!')
    : console.log('You forgot your password already?!')
);

}

// Function call to initialize app
init();
