const inquirer = require('inquirer');

// Intial Questions
const initialQuestions = [
    {
        type: 'list',
        message: 'Hello! Which team member would you like to add first?',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'teamMember'
    }
];

// Initial Prompt
function initialPrompt() {
    // Run inquirer
    inquirer
    .prompt(initialQuestions)
    .then((response) => {

        console.log(response);

    });
};

// Create a function to initialize app
function init() {
    initialPrompt();
} init();